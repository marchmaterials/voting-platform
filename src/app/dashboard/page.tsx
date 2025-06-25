import prisma from "@/lib/prisma";
import { Images, ProjectMaterials } from "@/types/dashboard";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@prisma/client";

export default async function Page() {
  const projects: Array<Project & Images & ProjectMaterials> =
    await prisma.project.findMany({
      include: {
        images: true,
        projectMaterial: { include: { material: true } },
      },
    });
  console.log("whole project:", projects[0]);
  return (
    <div className="min-h-screen">
      <div className="m-4">
        <div className="flex flex-row m-4 flex-wrap justify-around">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
