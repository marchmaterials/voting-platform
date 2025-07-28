"use client";
import { FullyEnrichedProject } from "@/types/dashboard";
import { useCallback, useState } from "react";
import { Card } from "antd";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { castVote } from "@/app/actions/vote";
import VoteButton from "./VoteButton";

export default function ProjectCard({
  project,
}: {
  project: FullyEnrichedProject;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <Card
        key={project.id}
        className="max-w-sm cursor-pointer"
        title={project.title}
        onClick={() => project.images.length && setLightboxOpen(true)}
        hoverable
      >
        {Boolean(project.images.length) && (
          <Image
            src={project.images[0].url}
            alt={`image of architectural project titled ${project.title}`}
            width={500}
            height={300}
            className="rounded-lg"
            loading="lazy"
          />
        )}
        <div className="mt-4">
          <VoteButton projectId={project.id} onVote={castVote} />
        </div>
      </Card>
      
      <Lightbox
        images={project.images.map((img) => img.url)}
        materials={[...project.projectMaterial.map((m) => m)]}
        title={project.title}
        project={project}
        open={lightboxOpen}
        onClose={useCallback(() => setLightboxOpen(false), [])}
        onVote={castVote}
      />
    </>
  );
}
