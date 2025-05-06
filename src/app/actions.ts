"use server";
import prisma from "@/lib/prisma";
import { materialActionState, ProjectSubmissionForm } from "../types/forms";
import { projectSubmissionSchema } from "@/lib/validation/projectSchema";

export async function persistProject(
  prevState: ProjectSubmissionForm,
  formData: FormData
): Promise<ProjectSubmissionForm> {
  console.log("SUBMIT FORM !:", formData);
  console.log("materials DATA:", formData.get("materials"));

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
          console.log("type of supplier base url:", typeof supplierBaseUrl);
          console.log("type of materialname:", typeof m.materialName);
          console.log(
            "type of materialname:",
            typeof m.materialName.toString()
          );
          console.log("type of description:", typeof m.description);
          console.log("type of projectID:", typeof projectId);
          console.log("type of supplierName:", typeof m.supplierName);
          console.log("type of usedWhere", typeof m.usedWhere);
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
    const materialsJson = formData.get("materials");
    const parsedMaterials = JSON.parse(materialsJson as string);
    console.log("materials URL?", parsedMaterials[0].url);
    console.log(
      "materials typeof name?",
      typeof parsedMaterials[0].materialName
    );
    console.log("materials [0] ?", parsedMaterials[0]);

    const rawData = {
      email: formData.get("email")?.toString(),
      title: formData.get("title")?.toString(),
      description: formData.get("description")?.toString(),
      location: formData.get("location")?.toString(),
      yearCompleted: Number(formData.get("yearCompleted")),
      typology: formData.get("typology")?.toString(),
      materials: parsedMaterials,
    };
    console.log("DEBUG: before zod parse");
    const validatedData: ProjectSubmissionForm =
      projectSubmissionSchema.parse(rawData);

    console.log("DEBUG: after zod parse");
    console.log("typeof title", typeof validatedData.title);
    console.log("typeof description", typeof validatedData.description);
    console.log("typeof location", typeof validatedData.location);
    console.log("typeof yearComp", typeof validatedData.yearCompleted);
    console.log("typeof typology", typeof validatedData.typology);
    console.log("typeof email", typeof validatedData.email);
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
      validatedData.materials,
      newProject.id
    );
    console.log("NEW MATERIALS CREATED: ", newMaterials);
  } catch (err) {
    console.error(err);
  }
  return prevState;
}
