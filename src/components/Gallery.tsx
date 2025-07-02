"use client";
import Image from "next/image";
import { useRef } from "react";

export function Gallery({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-full w-full relative flex flex-col items-center justify-center">
      <div
        ref={scrollRef}
        className="flex flex-row h-full overflow-x-auto gap-4 scroll-smooth"
      >
        {images.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={`Project image ${i + 1}`}
            width={800}
            height={800}
            className="max-h-full max-w-full object-contain"
          />
        ))}
      </div>
    </div>
  );
}
