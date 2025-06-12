"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { imageKitLoader } from "@/utils/imageKit";

export default function Lightbox({
  images,
  open,
  initialIndex = 0,
  onClose,
}: {
  images: string[];
  open: boolean;
  initialIndex?: number;
  onClose: () => void;
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
      <button
        className="absolute left-4 text-3xl text-white"
        onClick={prev}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <div className="flex flex-col items-center">
        <Image
          loader={() => imageKitLoader({ src: images[index], width: 800 })}
          src={images[index]}
          alt={`Project image ${index + 1}`}
          width={800}
          height={800}
          className="w-[70vw] max-h-[80vh] object-contain"
        />
        <div className="text-white mt-2">
          {index + 1} / {images.length}
        </div>
      </div>
      <button
        className="absolute right-4 text-3xl text-white"
        onClick={next}
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
}
