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
const prisma = new PrismaClient();

async function main(): Promise<Project | null | undefined> {
  async function createMaterialsAndConnections(
    materialData: Array<materialActionState>,
    projectId: string
  ) {
    console.log(
      "DEBUG: createMaterialsAndConnections projectID",
      typeof projectId
    );
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

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
