"use client";
import { imageKitLoader } from "@/utils/imageKit";
import Image from "next/image";

export function Gallery({
  images,
  index,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="h-full">
      <button
        className="absolute left-4 text-3xl text-white"
        onClick={onPrev}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <Image
        loader={() => imageKitLoader({ src: images[index], width: 800 })}
        src={images[index]}
        alt={`Project image ${index + 1}`}
        width={800}
        height={800}
        className="max-h-full max-w-full object-contain"
      />
      <div className="text-white mt-2">
        {index + 1} / {images.length}
      </div>
      <button
        className="absolute right-4 text-3xl text-white top-1/2 -translate-y-1/2"
        onClick={onNext}
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
}
