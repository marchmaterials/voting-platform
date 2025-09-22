import {
  Material,
  Image as PrismaImage,
  ProjectMaterial,
  ProjectStakeholder,
  Project,
  Stakeholder,
  Supplier,
} from "@prisma/client";
import { ImageLoaderProps } from "next/image";

export type Images = {
  images: Array<PrismaImage>;
};

export interface extendedImageLoaderProps extends ImageLoaderProps {
  height?: number;
}

export type EnrichedMaterial = Material & { supplier: Supplier };

export type EnrichedProjectMaterial = ProjectMaterial & { material: EnrichedMaterial };

export type EnrichedProjectMaterials = Array<EnrichedProjectMaterial>;

export type ProjectMaterials = {
  projectMaterial: EnrichedProjectMaterials;
};

export type FilterOptions = {
  searchTerm: string;
};

export type EnrichedProjectStakeholder = ProjectStakeholder & {
  stakeholder: Stakeholder
}

export type ProjectStakeholders = {
  projectStakeholders: Array<EnrichedProjectStakeholder>;
};

export type FullyEnrichedProject = Project &
  Images &
  ProjectMaterials &
  ProjectStakeholders & { titleSlug: string }
