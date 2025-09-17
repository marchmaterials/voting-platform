"use client";

import { Stakeholder, STAKEHOLDER_TYPE } from "@prisma/client";
import {
  EnrichedProjectMaterials,
  FullyEnrichedProject,
} from "@/types/dashboard";
import MaterialCollapse from "./MaterialCollapse";
import { Collapse, Tag } from "antd";
const comingSoonStakeholders = [
  {
    key: "1",
    label: STAKEHOLDER_TYPE.ENGINEER,
    children: <div className="text-sm font-light">Coming soon</div>,
  },
  {
    key: "3",
    label: STAKEHOLDER_TYPE.CONTRACTOR,
    children: <div className="text-sm font-light">Coming soon</div>,
  },
];

type StakeholderRecord = Record<STAKEHOLDER_TYPE, Array<Stakeholder>>;

export function Sidebar({
  materials,
  project,
}: {
  materials: EnrichedProjectMaterials;
  project: FullyEnrichedProject;
}) {

  const materialList = materials.map(m => (<MaterialCollapse projectMaterial={m} />))
  const stakeholdersMap: StakeholderRecord = project.projectStakeholders.reduce((acc, s) => {
    const key = s.stakeholder.type[0]
    if (!key) { return acc }
    (acc[key] ??= []).push(s.stakeholder);
    return acc
  }, {} as Partial<StakeholderRecord>) as StakeholderRecord
  const stakeholderList = Object.entries(stakeholdersMap)
    .map(([type, sArray]) => {
      const key = sArray.map(s => s.id).join(",")
      const children = sArray.map(s => {
        if (s.url !== null) {
          return <div key={`${s.id}_`} className="text-sm font-light"><a href={s.url} rel="noopener noreferrer"
            target="_blank"
          >{s.companyName}</a></div>
        } else {
          <div key={`${s.id}_`} className="text-sm font-light">{s.companyName}</div>
        }
      })
      return {
        key: key,
        label: type,
        children: <div>{children}</div>
      }
    })
    .concat(comingSoonStakeholders);
  return (
    <div className="pl-4 pr-4 pb-4">
      <h4 className="text-sm font-light">{project.location}</h4>
      <p className="text-sm font-light">{project.area}sqm</p>
      <p className="text-sm font-light">completed in {project.yearCompleted}</p>
      <h4 className="font-medium mt-4 mb-4">Materials</h4>
      <div className="border-[1px] border-[#e5e7eb] rounded-lg overflow-hidden">
        {materialList}
      </div>
      <h4 className="font-medium mt-4 mb-4">Stakeholders</h4>
      <Collapse items={stakeholderList} />
      <p className="text-md mt-6">About this project:</p>
      <p className="text-sm font-light mt-2">{project.description}</p>
    </div>
  );
}
