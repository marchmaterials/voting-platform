"use server";
import type {
  materialSubmission,
  ProjectSubmissionForm,
} from "../src/types/forms";
import { projectSubmissionSchema } from "../src/lib/validation/projectSchema";
import { readFileSync } from "fs";
const testData = JSON.parse(readFileSync("src/tests/testData.json", "utf-8"));
const imageData = JSON.parse(
  readFileSync("src/tests/testImages.json", "utf-8")
);
const testUsers = JSON.parse(readFileSync("src/tests/testUsers.json", "utf-8"));
import type { Project } from "@prisma/client";
import prisma from "../src/lib/prisma";
// import { importProjects } from "./migrate";
// import {
//   IMAGE_KIT_PUBLIC_KEY,
//   IMAGE_KIT_UPLOAD_URL,
// } from "../src/constants.js";
// import ImageKit from "imagekit";

// const imagekit = new ImageKit({
//   publicKey: IMAGE_KIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_API_TOKEN || "",
//   urlEndpoint: IMAGE_KIT_UPLOAD_URL,
// });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface UploadResult {
  fileId: string;
  url: string;
  AITags?: Array<{ name: string; confidence: number }>;
}

type ProjectWithImageFolder = Project & {
  imageDirectory: string;
};

type ImageData = {
  id: string;
  url: string;
  aiTags?: string[];
  credit: string;
};

const isAlreadySeeded = async (): Promise<boolean | Error> => {
  console.info("isAlreadySeeded")
  const projectTitles = [testData[0].title, testData[1].title];
  console.info(projectTitles)
  try {
    console.log("hello")
    const projects = await prisma.project.findMany({
      where: { OR: [{ title: projectTitles[0] }, { title: projectTitles[1] }] },
    });
    console.log(projects)
    const users = await prisma.user.findMany();
    console.log(
      "DB already seeded? Projects:",
      projects.length === 2,
      "Users:",
      users.length === testUsers.length
    );
    return projects.length === 2 && users.length === testUsers.length;
  } catch (err) {
    console.log("error checking if seeded", err);
    return new Error("cannot check if db is already seeded");
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const uploadImages = async (images: Array<string>, rootDir: string) => {
//   return Promise.all(
//     images.map((i, index) => {
//       const file = readFileSync(`${rootDir}/${i}`).toString("base64");
//       try {
//         return imagekit.upload({
//           file,
//           fileName: `march-mvp-${index}`,
//           responseFields: "metadata, embeddedMetadata, customMetadata, tags",
//           useUniqueFileName: true,
//           extensions: [
//             { name: "google-auto-tagging", maxTags: 5, minConfidence: 40 },
//           ],
//         });
//       } catch (err) {
//         console.error("failed to upload images", err);
//         return err;
//       }
//     })
//   );
// };

export async function createMaterialsAndConnections(
  materialData: Array<materialSubmission>,
  projectId: string
) {
  return await Promise.allSettled(
    materialData.map((m) => {
      try {
        // const supplierBaseUrl = new URL(m.url).hostname;
        return prisma.material.create({
          data: {
            name: m?.materialName ?? "unknown",
            description: m?.description,
            url: m?.url,
            tags: m?.tags,
            certifications: [],
            supplier: {
              create: {
                name: m?.supplierName ?? "unknown",
                website: m?.supplierContact.url,
                email: m?.supplierContact.email ?? [],
                phoneNumber: m?.supplierContact.phoneNumber ?? [],
                locations: m?.supplierContact?.locations ?? [],
              },
            },
            projectMaterials: {
              create: {
                usedWhere: m?.usedWhere ?? "unknown",
                projectId,
                percentage: m?.percentage,
              },
            },
          },
        });
      } catch (err) {
        console.log("error creating material", err);
      }
    })
  );
}

const createFullyEnrichedProject = async (
  projectData: ProjectWithImageFolder
) => {
  try {
    console.log("createFullyEnrichedProject")
    const validatedData: ProjectSubmissionForm =
      projectSubmissionSchema.parse(projectData);
    const images = imageData
      .filter((img: ImageData) => img.credit === validatedData.imageCredit)
      .map((img: ImageData) => {
        return {
          id: img.id,
          url: img.url,
          aiTags: img.aiTags,
          credit: img.credit,
        };
      });
    // CREATE PROJECT
    const newProject = await prisma.project.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        location: validatedData.location,
        yearCompleted: validatedData.yearCompleted,
        typology: validatedData.typology,
        author: { create: { email: validatedData.email } },
        area: validatedData.area,
        construction: validatedData.construction,
        votes: 0,
        stakeholders: {
          // create: validatedData.stakeholders.map((stakeholder) => ({
          //   type: stakeholder.type,
          //   companyName: stakeholder.companyName,
          //   email: stakeholder.email,
          //   location: {
          //     create: {
          //       ...stakeholder.location,
          //     },
          //   },
          //   phoneNumber: stakeholder.phoneNumber,
          // })),
        },
        images: {
          create: images,
        },
      },
    });
    console.log("NEW PROJECT CREATED: ", newProject);

    // CREATE MATERIALS, SUPPLIERS, PROJECT_MATERIALS, CONNECTIONS
    const newMaterials = await createMaterialsAndConnections(
      validatedData.materials,
      newProject.id
    );
    console.log("NEW MATERIALS CREATED: ", newMaterials);

    const finalProject = await prisma.project.findFirst({
      where: {
        id: newProject.id,
      },
      include: { images: true, materials: true },
    });
    return finalProject;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export async function main(): Promise<void> {
  console.info("main: SEEDING", testData.length);
  let allProjects: Array<Project>;
  try {
    if (await isAlreadySeeded()) {
      console.info("Data already seeded")
      return
    } else {
      console.info("main: here")
      allProjects = await Promise.all(
        testData.map((p: ProjectWithImageFolder) => {
          return createFullyEnrichedProject(p);
        })
      );
    }
    console.log("all projects successfully created:", allProjects);
  } catch (err) {
    console.error("could not create all projects", err);
  }
}

// (async () => {
//   try {
//     await importProjects();
//     await prisma.$disconnect();
//   } catch (err) {
//     console.error(err);
//     await prisma.$disconnect();
//     process.exit(1);
//   }
// })();
