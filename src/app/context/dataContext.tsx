"use client";

import { createContext, useContext, useState } from "react";
import { FullyEnrichedProject } from "@/types/dashboard";

type DataContext = {
  projects: Array<FullyEnrichedProject>;
  setProjects: React.Dispatch<
    React.SetStateAction<Array<FullyEnrichedProject>>
  >;
  initialProjectsFetch: Promise<Array<FullyEnrichedProject> | Error>;
};

const DataContext = createContext<DataContext>({
  projects: [],
  setProjects: () => ({}),
  initialProjectsFetch: Promise.resolve([]),
});

export function DataProvider({
  children,
  initialProjectsFetch,
}: {
  children: React.ReactNode;
  initialProjectsFetch: Promise<Array<FullyEnrichedProject> | Error>;
}) {
  const [projects, setProjects] = useState<Array<FullyEnrichedProject>>([]);

  return (
    <DataContext.Provider value={{ projects, setProjects, initialProjectsFetch }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
