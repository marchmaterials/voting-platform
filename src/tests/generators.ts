import { Project, ProjectMaterial, BUILDING_TYPOLOGY } from "@prisma/client";
import { Images, ProjectMaterials } from "@/types/dashboard";
import * as data from "./testData.json";
import { randomUUID } from "crypto";

const generateMaterial = () =>
  data.flatMap((mat: (typeof data)[0]) =>
    mat.materials.map((material, materialIndex) => ({
      id: randomUUID(),
      name: material.materialName,
      description: material.description,
      url: material.url,
      supplierId: `${material.supplierName}-${materialIndex}`,
      supplier: generateSupplier(material, materialIndex),
      projectMaterials: [],
      projects: [],
      images: [],
      tags: material.tags ?? [],
      certifications: [],
    }))
  );

const generateProjectMaterial = (): ProjectMaterial => ({
  id: randomUUID(),
  materialId: randomUUID(),
  projectId: randomUUID(),
  usedWhere: data[0].materials[0].usedWhere,
});

export const generateProject = (): Project & Images & ProjectMaterials => {
  const projectData = data[0];
  return {
    id: randomUUID(),
    createdAt: new Date(),
    title: projectData.title,
    description: projectData.description,
    location: projectData.location,
    yearCompleted: projectData.yearCompleted,
    typology: BUILDING_TYPOLOGY.COMMERCIAL,
    authorEmail: projectData.email,
    selectedForCompetition: false,
    images: [],
    projectMaterial: [generateProjectMaterial()],
    materials: [],
    stakeholders: [],
    area: projectData.area,
  };
};
