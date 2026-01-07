"use client";
import { FullyEnrichedProject } from "@/types/dashboard";
import { useState } from "react";
import { Card } from "antd";
import Image from "next/image";
import { getIUrl } from "@/utils/image";

export default function ProjectCardNoVote({
  project,
}: {
  project: FullyEnrichedProject;
}) {
  const [loading, setLoading] = useState(true);

  const titleImage = project.images.find((i) =>
    i.aiTags.includes("title-image")
  );

  const url = titleImage?.url ?? project.images[0].url;

  return (
    <>
      <Card
        key={project.id}
        data-testid={project.id}
        className="w-[350px] sm:w-[400px] max-h-fit cursor-pointer !mb-2"
        title={project.title}
        hoverable
        loading={loading}
        cover={
          Boolean(project.images.length) && (
            <img
              src={getIUrl(url)}
              alt={`image of architectural project titled ${project.title}`}
              width={400}
              height={300}
              loading="lazy"
              className="!rounded-none"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onLoad={() => setLoading(false)}
            />
          )
        }
      >
        <div className="flex flex-row justify-between items-center">
          <div className="text-sm text-gray-700">Votes: {project.votes}</div>
        </div>
      </Card>
    </>
  );
}
