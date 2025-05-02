"use server";
import type {
  materialActionState,
  ProjectSubmissionForm,
} from "../src/app/types/forms.ts";
import { projectSubmissionSchema } from "../src/lib/validation/projectSchema.ts";
import { readFileSync } from "fs";
const testData = JSON.parse(readFileSync("src/tests/testData.json", "utf-8"));
import type { Project } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import {
  IMAGE_KIT_PUBLIC_KEY,
  IMAGE_KIT_UPLOAD_URL,
} from "../src/constants.js";
import fs from "fs";
import ImageKit from "imagekit";

const prisma = new PrismaClient();
const imagekit = new ImageKit({
  publicKey: IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_API_TOKEN || "",
  urlEndpoint: IMAGE_KIT_UPLOAD_URL,
});

interface UploadResult {
  fileId: string;
  url: string;
  AITags?: Array<{ tag: string; confidence: number }>;
}

const uploadAndConnectImages = async (
  projectId: string,
  images: Array<string>
) => {
  return Promise.all(
    images.map((i, index) => {
      const file = fs.readFileSync(i).toString("base64");
      try {
        return imagekit.upload({
          file,
          fileName: `${projectId}-${index}`,
          responseFields: "metadata, embeddedMetadata, customMetadata, tags",
          useUniqueFileName: true,
          extensions: [
            { name: "google-auto-tagging", maxTags: 5, minConfidence: 40 },
          ],
        });
      } catch (err) {
        console.error(err);
        return err;
      }
    })
  );
};

async function main(): Promise<Project | null> {
  async function createMaterialsAndConnections(
    materialData: Array<materialActionState>,
    projectId: string
  ) {
    return Promise.all(
      materialData.map((m) => {
        try {
          const supplierBaseUrl = new URL(m.url).hostname;
          return prisma.material.create({
            data: {
              name: m.materialName,
              description: m.description,
              url: m.url,
              projects: {
                connect: [{ id: projectId }],
              },
              supplier: {
                create: {
                  name: m.supplierName,
                  website: supplierBaseUrl,
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

  try {
    console.log("DEBUG: before zod parse");
    const validatedData: ProjectSubmissionForm =
      projectSubmissionSchema.parse(testData);
    console.log("after zod parse");
    const newProject = await prisma.project.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        location: validatedData.location,
        yearCompleted: validatedData.yearCompleted,
        typology: validatedData.typology,
        authorEmail: validatedData.email,
      },
    });
    console.log("NEW PROJECT CREATED: ", newProject);

    const newMaterials = await createMaterialsAndConnections(
      testData.materials,
      newProject.id
    );
    console.log("NEW MATERIALS CREATED: ", newMaterials);

    return await prisma.project.findFirst({
      where: {
        authorEmail: validatedData.email,
      },
    });
  } catch (err) {
    console.error(err);
    return null;
  }
}

try {
  // await main();
  const imageUpload = await uploadAndConnectImages("fakeID", [
    "/Users/alexservie/tech-stuff/March/march-app/local/img/icon.png",
  ]);
  console.log("uploaded image?? ", imageUpload);
  const typedResult = imageUpload as unknown as UploadResult[];
  console.log("ai tags: ", typedResult[0].AITags);
  await prisma.$disconnect();
} catch (err) {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
}
