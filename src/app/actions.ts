"use server";
import prisma from "@/lib/prisma";

export type materialActionState = {
  materialName: string;
  description: string;
  usedWhere: string;
  supplierName: string;
  url: string;
};
export type projectActionState = {
  email: string;
  title: string;
  description: string;
  location: string;
  yearCompleted: number;
  typology: "residential" | "commercial" | "industrial" | "institutional";
  materials: Array<materialActionState>;
};

export async function persistProject(
  prevState: projectActionState,
  formData: FormData
) {
  console.log("SUBMIT FORM !:", formData);
  console.log("form DATA:", formData.get("materials"));

  async function createMaterialsAndConnections({
    materialData,
    projectId,
  }: {
    materialData: Array<materialActionState>;
    projectId: string;
  }) {
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
                projectId: { connect: { id: projectId } },
              },
            },
          },
        })
      )
    );
  }

  try {
    const id = await prisma.project.create({
      title: formData.get("title"),
      description: formData.get("description"),
      location: formData.get("location"),
      yearCompleted: formData.get("yearCompleted"),
      typology: formData.get("typology"),
      authorEmail: formData.get("email"),
    });
    await createMaterialsAndConnections({
      materialData: formData.get("materials"),
      projectId: id,
    });
  } catch (err) {
    console.error(err);
  }
}
