"use server";
import prisma from "@/lib/prisma";
import { materialActionState, ProjectSubmissionForm } from "./types/forms";
import { projectSubmissionSchema } from "@/lib/validation/projectSchema";

export async function persistProject(
  prevState: ProjectSubmissionForm,
  formData: FormData
): Promise<ProjectSubmissionForm> {
  console.log("SUBMIT FORM !:", formData);
  console.log("form DATA:", formData.get("materials"));
  console.log("form DATA title:", formData.get("title"));

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
    const materialsJson = formData.get("materials");
    const rawData = {
      email: formData.get("email")?.toString(),
      title: formData.get("title")?.toString(),
      description: formData.get("description")?.toString(),
      location: formData.get("location")?.toString(),
      yearCompleted: Number(formData.get("yearCompleted")),
      typology: formData.get("typology")?.toString(),
      materials: JSON.parse(materialsJson as string),
    };
    const validatedData: ProjectSubmissionForm =
      projectSubmissionSchema.parse(rawData);

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
    await createMaterialsAndConnections(validatedData.materials, newProject.id);
  } catch (err) {
    console.error(err);
  }
  return prevState;
}
