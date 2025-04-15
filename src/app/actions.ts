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

  //   const prunedMaterials = Object.keys(formData)
  //     .filter((k) => k.startsWith("material") || k.startsWith("supplier"))
  //     .reduce((acc, val) => {
  //       const suffix = String(val.split("-")[1]);
  //       console.log('what', val)
  //       return (acc[suffix][val] = formData.get(val));
  //       //   [ [materialName0, supplierName0, supplierWebsite0], [..] ]
  //       //   [ {materialName0: name, supplierName0: name}, {}]
  //     }, {});

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
