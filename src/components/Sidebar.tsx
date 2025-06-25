"use client";

import { ProjectMaterial, Project } from "@prisma/client";
import { Images, ProjectMaterials } from "@/types/dashboard";
import { List } from "antd";

export function Sidebar({
  materials,
  project,
}: {
  materials: Array<ProjectMaterial>;
  project: Project & Images & ProjectMaterials;
}) {
  console.log("material", materials[0]);
  return (
    <div className="pl-4 pr-4">
      <h4 className="text-sm font-light">{project.location}</h4>
      <p className="text-sm font-light">{project.area}sqm</p>
      <p className="text-sm font-light">
        completed in {project.yearCompleted}
      </p>
      <h4 className="font-semibold mt-3">Materials used:</h4>
      <List
        dataSource={materials}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.usedWhere}
              description={"description here"}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
