"use client";
import { ProjectWithImages } from "@/types/dashboard";
import { useState } from "react";
import { Card } from "antd";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { imageKitLoader } from "@/utils/imageKit";

export default function DashboardProjects({
  project,
}: {
  project: ProjectWithImages;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <Card
        key={project.id}
        className="max-w-md m-4 cursor-pointer"
        title={project.title}
        onClick={() => project.images.length && setLightboxOpen(true)}
        hoverable
      >
        {Boolean(project.images.length) && (
          <Image
            loader={imageKitLoader}
            src={project.images[0].url}
            alt={`image of architectural project titled ${project.title}`}
            width={400}
            height={300}
            className="rounded-lg"
          />
        )}
      </Card>
      <Lightbox
        images={project.images.map((img) => img.url)}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
