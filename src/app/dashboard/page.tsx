import { Images, ProjectMaterials } from "@/types/dashboard";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@prisma/client";
import { getAllProjects } from "@/app/actions/dashboard";

export default async function Page() {
  const projects: (Project & Images & ProjectMaterials)[] | Error =
    await getAllProjects();
  if (projects instanceof Error) return null;
  console.log("whole project:", projects[0]);
  return (
    <div className="min-h-screen">
      <div className="m-4">
        <div 
          data-testid="project-grid" 
          className="flex flex-row m-4 flex-wrap justify-around"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
