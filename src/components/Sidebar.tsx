"use client";

import { Stakeholder, STAKEHOLDER_TYPE } from "@prisma/client";
import {
  EnrichedProjectMaterials,
  FullyEnrichedProject,
} from "@/types/dashboard";
import MaterialCollapse from "./MaterialCollapse";
import StakeholderCollapse from "./StakeholderCollapse";



export function Sidebar({
  materials,
  project,
}: {
  materials: EnrichedProjectMaterials;
  project: FullyEnrichedProject;
}) {

  return (
    <div className="pl-4 pr-4 pb-4">
      <h4 className="text-sm font-light">{project.location}</h4>
      <p className="text-sm font-light">{project.area}sqm</p>
      <p className="text-sm font-light">completed in {project.yearCompleted}</p>
      <h4 className="font-medium mt-4 mb-4">Materials</h4>
      <MaterialCollapse projectMaterials={materials} />
      <h4 className="font-medium mt-4 mb-4">Stakeholders</h4>
      <StakeholderCollapse projectStakeholders={project.projectStakeholders} />
      <p className="text-md mt-6">About this project:</p>
      <p className="text-sm font-light mt-2">{project.description}</p>
    </div>
  );
}
