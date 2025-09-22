"use client";
import {
  FullyEnrichedProject,
  EnrichedProjectMaterials,
} from "@/types/dashboard";
import DetailedProjectView from "./DetailedProjectView";

export default function Lightbox({
  open,
  onClose,
  images,
  materials,
  title,
  project,
  votes,
  setVotes,
}: Props) {
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
      <DetailedProjectView
        images={images}
        materials={materials}
        title={title}
        project={project}
        votes={votes}
        setVotes={setVotes} />
    </div>
  );


}

type Props = {
  open: boolean;
  onClose: () => void;
  images: string[];
  materials: EnrichedProjectMaterials;
  title: string;
  project: FullyEnrichedProject;
  votes: number;
  setVotes: React.Dispatch<React.SetStateAction<number>>;
};
