"use client";
import { Sidebar } from "./Sidebar";
import { Gallery } from "./Gallery";
import {
  FullyEnrichedProject,
  EnrichedProjectMaterials,
} from "@/types/dashboard";
import { useState } from "react";
import { Button, Modal, Input, message } from "antd";

export default function Lightbox({
  images,
  open,
  onClose,
  materials,
  title,
  project,
}: {
  images: string[];
  open: boolean;
  initialIndex?: number;
  onClose: () => void;
  materials: EnrichedProjectMaterials;
  title: string;
  project: FullyEnrichedProject;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <button
        className="absolute top-4 right-6 text-3xl text-white"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      
      <div className="bg-white rounded-lg shadow-lg w-[90vw] h-[80vh] flex flex-col">
        <h2 className="text-2xl p-4 font-extrabold">{title}</h2>
        <div className="flex sm:flex-row flex-col-reverse flex-1 h-0 justify-around">
          <div className="h-full w-full sm:w-1/3 sm:max-w-[320px] overflow-y-auto">
            <Sidebar materials={materials} project={project} />
          </div>
          <div className="h-full w-2/3 flex">
            <Gallery images={images} />
          </div>
        </div>
        <div className="p-4 border-t mt-auto">
          <VoteButton projectId={project.id} />
        </div>
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
      </div>
    </div>
  );
}
