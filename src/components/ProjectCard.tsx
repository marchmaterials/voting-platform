"use client";
import { ProjectWithImages } from "@/types/dashboard";
import { Card, Image } from "antd";

export default function DashboardProjects({
  project,
}: {
  project: ProjectWithImages;
}) {
  return (
    <Card
      key={project.id}
      className="max-w-md m-4 cursor-pointer"
      title={project.title}
    >
      {Boolean(project.images.length) && (
        <Image.PreviewGroup
          items={[...project.images.map((img) => img.url)]}
          preview={{
            toolbarRender: () => null,
          }}
        >
          <Image
            src={project.images[0].url}
            alt={`image of architectural project titled ${project.title}`}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </Image.PreviewGroup>
      )}
    </Card>
  );
}
