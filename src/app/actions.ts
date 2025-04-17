"use server";
import prisma from "@/lib/prisma";
import { materialActionState } from "./types/forms";

export async function persistProject(prevState, formData: FormData) {
  console.log("SUBMIT FORM !:", formData);
  console.log("form DATA:", formData.get("materials"));

  async function createMaterialsAndConnections(
    materialData: Array<materialActionState>,
    projectId: string
  ) {
    return Promise.all(
      materialData.map((m) =>
        prisma.material.create({
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
              },
            },
            projectMaterials: {
              create: {
                usedWhere: m.usedWhere,
                projectId: projectId,
              },
            },
          },
        })
      )
    );
  }

  try {
    const newProject = await prisma.project.create({
      title: formData.get("title"),
      description: formData.get("description"),
      location: formData.get("location"),
      yearCompleted: formData.get("yearCompleted"),
      typology: formData.get("typology"),
      authorEmail: formData.get("email"),
    });
    await createMaterialsAndConnections(
      [...formData.get("materials")],
      newProject.id
    );
  } catch (err) {
    console.error(err);
  }
}
