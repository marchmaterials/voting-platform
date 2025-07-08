import { Project, BUILDING_TYPOLOGY, Material } from "@prisma/client";
import { Images, ProjectMaterials } from "@/types/dashboard";
import * as data from "./testData.json";
import { randomUUID } from "crypto";

const generateMaterial = (): Material => {
  const mat = data[0].materials[0];
  return {
    id: randomUUID(),
    name: mat.materialName,
    description: mat.description,
    url: mat.url,
    supplierId: randomUUID(),
    tags: mat.tags ?? ["title-image"],
    certifications: [],
  };
};

const generateProjectMaterial = (): ProjectMaterials => ({
  projectMaterial: [
    {
      id: randomUUID(),
      materialId: randomUUID(),
      projectId: randomUUID(),
      usedWhere: data[0].materials[0].usedWhere,
      material: generateMaterial(),
    },
  ],
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
    ...generateProjectMaterial(),
    area: projectData.area,
  };
};
