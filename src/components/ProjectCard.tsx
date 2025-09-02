"use client";
import { FullyEnrichedProject } from "@/types/dashboard";
import { useCallback, useState } from "react";
import { Card } from "antd";
import Image from "next/image";
import Lightbox from "./Lightbox";

export default function ProjectCard({
  project,
}: {
  project: FullyEnrichedProject;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [voteCount, setVoteCount] = useState(project.votes);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Card
        key={project.id}
        data-testid={project.id}
        className="w-[400px] max-h-fit cursor-pointer"
        title={project.title}
        onClick={() => setLightboxOpen(true)}
        hoverable
        loading={loading}
        cover={
          Boolean(project.images.length) && (
            <Image
              src={project.images[0].url}
              alt={`image of architectural project titled ${project.title}`}
              width={400}
              height={300}
              layout="responsive"
              loading="lazy"
              className="w-100"
              onLoad={() => setLoading(false)}
            />
          )
        }
      >
        <div className="text-sm text-gray-700">Votes: {voteCount}</div>
      </Card>
      <Lightbox
        images={project.images.map((img) => img.url)}
        materials={[...project.projectMaterial.map((m) => m)]}
        title={project.title}
        project={project}
        votes={voteCount}
        setVotes={setVoteCount}
        open={lightboxOpen}
        onClose={useCallback(() => setLightboxOpen(false), [])}
      />
    </>
  );
}
