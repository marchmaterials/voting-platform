"use client";

import { useDataContext } from "@/app/context/dataContext";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";

export default function ProjectDashboard() {
    const { filteredProjects, allProjects, search } = useDataContext();
    const [loading, setLoading] = useState(false);

    const projectsToShow = search ? filteredProjects : allProjects;

    return (
        <div className="flex flex-col items-center h-[80vh]">
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur py-4">
                <SearchBar setLoading={setLoading} />
            </div>
            <div className="overflow-y-auto flex-1 rounded-lg">
                {projectsToShow.length === 0 && !loading && (
                    <p data-testid="no-results-message">
                        No projects found. Try a different search term.
                    </p>
                )}
                {loading ? (
                    <p data-testid="loading-message">Loading projects...</p>
                ) : (
                    <Masonry
                        data-testid="project-grid"
                        breakpointCols={{ default: 3, 1300: 2, 900: 1 }}
                        className="flex w-auto rounded-lg -ml-2"
                        columnClassName="bg-clip-padding pl-2"
                    >
                        {projectsToShow.map((p) => (
                            <ImageCard key={p.id} project={p} />
                        ))}
                    </Masonry>
                )}
            </div>

        </div>
    );
}
