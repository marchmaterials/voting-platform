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



  // prisma.material.create({
  //     name: formData.get('materialName'),
  //     supplier: {
  //         create({
  //         material:formData.get(''),
  //         website:formData.get('')
  //     })
  // }
  // })

  // prisma.project.create({
  //   title: formData.get("title"),
  //   description: formData.get("description"),
  //   location: formData.get("location"),
  //   yearCompleted: formData.get("yearCompleted"),
  //   typology: formData.get("typology"),
  //   authorEmail: formData.get("email"),
  // });
}
