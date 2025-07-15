"use client";

import { createContext, useContext, useState } from "react";
import { FullyEnrichedProject } from "@/types/dashboard";

type DataContext = {
  projects: Array<FullyEnrichedProject>;
  setProjects: React.Dispatch<
    React.SetStateAction<Array<FullyEnrichedProject>>
  >;
  projectsPromise: Promise<Array<FullyEnrichedProject> | Error>;
};

const DataContext = createContext<DataContext | null>(null);

export function DataProvider({
  children,
  projectsPromise,
}: {
  children: React.ReactNode;
  projectsPromise: Promise<Array<FullyEnrichedProject> | Error>;
}) {
  const [projects, setProjects] = useState<Array<FullyEnrichedProject>>([]);

  return (
    <DataContext.Provider value={{ projects, setProjects, projectsPromise }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
