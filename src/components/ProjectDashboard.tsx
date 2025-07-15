"use client";

import ProjectCard from "@/components/ProjectCard";
import { use } from "react";
import { useDataContext } from "@/app/context/dataContext";

export default function ProjectDashboard() {
  const { projects, initialProjectsFetch } = useDataContext();

  const projectsToShow = projects.length ?? use(initialProjectsFetch);

  return (
    <>
      {projectsToShow.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </>
  );
}
