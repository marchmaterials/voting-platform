import SearchBar from "@/components/SearchBar";
import ProjectDashboard from "@/components/ProjectDashboard";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="m-4">
        <SearchBar />
        <div
          data-testid="project-grid"
          className="flex flex-row m-4 flex-wrap justify-around"
        >
          <Suspense fallback={<p>loading projects...</p>}>
            <ProjectDashboard />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
