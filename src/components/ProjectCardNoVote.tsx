"use client";
import { FullyEnrichedProject } from "@/types/dashboard";
import { useCallback, useState } from "react";
import { Card } from "antd";
import Image from "next/image";
import Lightbox from "./Lightbox";

export default function ProjectCardNoVote({
    project,
}: {
    project: FullyEnrichedProject;
}) {
    const [loading, setLoading] = useState(true);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const titleImage = project.images.find((i) =>
        i.aiTags.includes("title-image")
    );

    const onClose = useCallback(() => {
        setLightboxOpen(false)
    }, [])

    // const onClose = useCallback(() => {
    //     setLightboxOpen(false)
    //     if (prev === "/dashboard") {
    //       // this preserves scroll position (more or less)
    //       router.back()
    //     } else {
    //       router.push("/dashboard")
    //     }
    //   }, [prev, router])
    

    return (
        <>
            <Card
                key={project.id}
                data-testid={project.id}
                className="w-[350px] sm:w-[400px] max-h-fit cursor-pointer !mb-2"
                title={project.title}
                hoverable
                loading={loading}
                onClick={() => setLightboxOpen(true)}
                cover={
                    Boolean(project.images.length) && (
                        <Image
                            src={titleImage?.url ?? project.images[0].url}
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
            <Lightbox
            images={project.images.map((img) => img.url)}
            materials={[...project.projectMaterial.map((m) => m)]}
            title={project.title}
            project={project}
            votes={project.votes}
            open={lightboxOpen}
            onClose={onClose}
            />
        </>
    );

}
