"use client";

import ProjectCard from "@/components/ProjectCard";
import { use } from "react";
import { useDataContext } from "@/app/context/dataContext";

export default function ProjectDashboard() {
  const dataContext = useDataContext();
  if (!dataContext || !dataContext.projectsPromise) {
    return "Error fetching projects, please try again later.";
  }
  const projects = use(dataContext.projectsPromise);
  if (projects instanceof Error)
    return "Error fetching projects, please try again later.";

  return (
    <>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </>
  );
}
