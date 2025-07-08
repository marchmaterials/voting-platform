"use client";
import { Images, ProjectMaterials } from "@/types/dashboard";
import { useCallback, useState } from "react";
import { Card, Button, Modal, Input, message } from "antd";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { Project } from "@prisma/client";

export default function ProjectCard({
  project,
}: {
  project: Project & Images & ProjectMaterials;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [votes, setVotes] = useState(0);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleVoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEmailModalOpen(true);
  };

  const handleEmailSubmit = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      message.error("Please enter a valid email.");
      return;
    }

    console.log("Mock saving vote to DB:", {
        projectId: project.id,
        email: email,
    });

    setVotes(votes + 1);
    setEmailModalOpen(false);
    setEmail("");
    message.success("Your vote was recorded!");
  };

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
          <h1>{`Votes: ${votes}`}</h1>
          <div className="flex gap-2 mt-2">
            <Button onClick={handleVoteClick}>
              Vote For This Project
            </Button>
          </div>
        </div>
      </Card>
      <Modal
        title="Enter Your Email to Vote"
        open={emailModalOpen}
        onOk={handleEmailSubmit}
        onCancel={() => setEmailModalOpen(false)}
        okText="Submit Vote"
      >
        <Input
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Modal>
      <Lightbox
        images={project.images.map((img) => img.url)}
        materials={[...project.projectMaterial.map((m) => m)]}
        title={project.title}
        project={project}
        open={lightboxOpen}
        onClose={useCallback(() => setLightboxOpen(false), [])}
      />
    </>
  );
}
