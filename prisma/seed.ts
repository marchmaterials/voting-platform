"use server";
import type {
  materialActionState,
  ProjectSubmissionForm,
} from "../src/app/types/forms.ts";
import { projectSubmissionSchema } from "../src/lib/validation/projectSchema.ts";
import { readFileSync, readdirSync } from "fs";
const testData = JSON.parse(readFileSync("src/tests/testData.json", "utf-8"));
import type { Project } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import {
  IMAGE_KIT_PUBLIC_KEY,
  IMAGE_KIT_UPLOAD_URL,
} from "../src/constants.js";
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

const uploadImages = async (images: Array<string>) => {
  return Promise.all(
    images.map((i, index) => {
      const file = readFileSync(`${testData.imageDirectory}/${i}`).toString(
        "base64"
      );
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
    // VALIDATE INPUT
    const validatedData: ProjectSubmissionForm =
      projectSubmissionSchema.parse(testData);

    // UPLOAD IMAGES
    const imageFiles = readdirSync(testData.imageDirectory);
    console.log("img files:", imageFiles);
    const imageUpload = await uploadImages(imageFiles);
    console.log("uploaded images?? ", imageUpload);
    const typedResult = imageUpload as unknown as UploadResult[];
    console.log("ai tags: ", typedResult[0].AITags);

    // CREATE PROJECT
    const newProject = await prisma.project.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        location: validatedData.location,
        yearCompleted: validatedData.yearCompleted,
        typology: validatedData.typology,
        authorEmail: validatedData.email,
        images: {
          create: typedResult.map((i) => ({
            id: i.fileId,
            url: i.url,
          })),
        },
      },
    });
    console.log("NEW PROJECT CREATED: ", newProject);

    // CREATE MATERIALS, SUPPLIERS, PROJECT_MATERIALS, CONNECTIONS
    const newMaterials = await createMaterialsAndConnections(
      testData.materials,
      newProject.id
    );
    console.log("NEW MATERIALS CREATED: ", newMaterials);

    const finalProject = await prisma.project.findFirst({
      where: {
        id: newProject.id,
      },
    });
    console.log("FULLY PERSISTED PROJECT: ", finalProject);
    return finalProject;
  } catch (err) {
    console.error(err);
    return null;
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
