"use client";
import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Gallery } from "./Gallery";
import { Project } from "@prisma/client";
import {
  Images,
  ProjectMaterials,
  EnrichedProjectMaterials,
} from "@/types/dashboard";

export default function Lightbox({
  images,
  open,
  initialIndex = 0,
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
  project: Project & Images & ProjectMaterials;
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("e", e.key);
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
      } else if (e.key === "ArrowRight") {
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose, open]);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

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
        <div className="flex sm:flex-row flex-col-reverse flex-1 h-0">
          <div className="h-full w-full sm:w-1/3 sm:max-w-[320px] border-r border-gray-200 overflow-y-auto">
            <Sidebar materials={materials} project={project} />
          </div>
          <div className="h-full w-2/3 flex">
            <Gallery
              images={images}
              index={index}
              onPrev={prev}
              onNext={next}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
