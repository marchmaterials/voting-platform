"use server";
import prisma from "@/lib/prisma";

export type projectActionState = {
  email: string;
  title: string;
  description: string;
  location: string;
  yearCompleted: number;
  typology: "residential" | "commercial" | "industrial" | "institutional";
  materials: Array<{
    materialName: string;
    description: string;
    usedWhere: string;
    supplierName: string;
    supplierWebsite: string;
  }>;
};

export async function persistProject(
  prevState: projectActionState,
  formData: FormData
) {
  console.log("SUBMIT FORM !:", formData);
  console.log("form DATA:", formData.get("materials"));

  try {
    const suppliers = await prisma.supplier.createManyAndReturn({
      data: [...formData.get("materials")],
    });
    const materialRecords = await prisma.material.createManyAndReturn;
  } catch (err) {}

  prisma.project.create({
    title: formData.get("title"),
    description: formData.get("description"),
    location: formData.get("location"),
    yearCompleted: formData.get("yearCompleted"),
    typology: formData.get("typology"),
    authorEmail: formData.get("email"),
  });
}
