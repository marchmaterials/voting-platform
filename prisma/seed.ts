"use server";
import type {
  materialActionState,
  ProjectSubmissionForm,
} from "../src/types/forms.ts";
import { projectSubmissionSchema } from "../src/lib/validation/projectSchema.ts";
import { readFileSync } from "fs";
const testData = JSON.parse(readFileSync("src/tests/testData.json", "utf-8"));
const imageData = JSON.parse(
  readFileSync("src/tests/testImages.json", "utf-8")
);
import type { Project } from "@prisma/client";
import prisma from "../src/lib/prisma.ts";
import {
  IMAGE_KIT_PUBLIC_KEY,
  IMAGE_KIT_UPLOAD_URL,
} from "../src/constants.js";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_API_TOKEN || "",
  urlEndpoint: IMAGE_KIT_UPLOAD_URL,
});

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
  const projectTitles = [testData[0].title, testData[1].title];
  try {
    const projects = await prisma.project.findMany({
      where: { OR: [{ title: projectTitles[0] }, { title: projectTitles[1] }] },
    });
    console.log("projects found:", projects);
    return projects.length === 2;
  } catch (err) {
    console.log("error checking if seeded", err);
    return new Error("cannot check if db is already seeded");
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const uploadImages = async (images: Array<string>, rootDir: string) => {
  return Promise.all(
    images.map((i, index) => {
      const file = readFileSync(`${rootDir}/${i}`).toString("base64");
      try {
        return imagekit.upload({
          file,
          fileName: `march-mvp-${index}`,
          responseFields: "metadata, embeddedMetadata, customMetadata, tags",
          useUniqueFileName: true,
          extensions: [
            { name: "google-auto-tagging", maxTags: 5, minConfidence: 40 },
          ],
        });
      } catch (err) {
        console.error("failed to upload images", err);
        return err;
      }
    })
  );
};

async function createMaterialsAndConnections(
  materialData: Array<materialActionState>,
  projectId: string
) {
  return Promise.all(
    materialData.map((m) => {
      try {
        // const supplierBaseUrl = new URL(m.url).hostname;
        return prisma.material.create({
          data: {
            name: m.materialName,
            description: m.description,
            url: m.url,
            tags: m.tags,
            certifications: [],
            supplier: {
              create: {
                name: m.supplierName,
                website: m.supplierContact.url,
                email: m.supplierContact.email ?? [],
                phoneNumber: m.supplierContact.phoneNumber,
                location: m.supplierContact.location,
              },
            },
            projectMaterials: {
              create: {
                usedWhere: m.usedWhere,
                projectId: projectId,
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
    // VALIDATE INPUT
    const validatedData: ProjectSubmissionForm =
      projectSubmissionSchema.parse(projectData);

    // UPLOAD IMAGES - ONLY FOR INITIAL LOCAL SEED
    // const imageFiles = readdirSync(projectData.imageDirectory);
    // console.log("img files:", imageFiles);
    // const imageUpload = await uploadImages(
    //   imageFiles,
    //   projectData.imageDirectory
    // );
    // console.log("uploaded images?? ", imageUpload);
    // const typedResult = imageUpload as unknown as UploadResult[];
    // console.log("ai tags: ", typedResult[0].AITags);
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
        authorEmail: validatedData.email,
        area: validatedData.area,
        stakeholders: {
          create: validatedData.stakeholders,
        },
        images: {
          create: images,
        },
        // images: {
        //   create: typedResult.map((i) => ({
        //     id: i.fileId,
        //     url: i.url,
        //     aiTags: i.AITags?.map((tag) => tag.name),
        //     credit: validatedData.imageCredit,
        //   })),
        // },
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
    // console.log("FULLY PERSISTED PROJECT: ", finalProject);
    return finalProject;
  } catch (err) {
    console.error(err);
    return null;
  }
};

async function main(): Promise<void> {
  console.info("SEEDING");
  try {
    if (await isAlreadySeeded()) return;
    const allProjects: Array<Project> = await Promise.all(
      testData.map((p: ProjectWithImageFolder) => {
        return createFullyEnrichedProject(p);
      })
    );
    console.log("all projects successfully created:", allProjects);
  } catch (err) {
    console.error("could not create all projects", err);
  }
}

try {
  await main();
  await prisma.$disconnect();
} catch (err) {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
}
