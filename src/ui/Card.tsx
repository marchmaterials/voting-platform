"use client";
import { Image as ImageModel } from "@prisma/client";
import Image from "next/image";

export function Card({
  title,
  images,
}: {
  title: string;
  images: ImageModel[];
}) {
  if (!images) return null;
  return (
    <div className=" flex  gap-x-4 rounded-xl bg-white shadow-lg outline">
      <h5>{title}</h5>
      {images.map((i) => (
        <Image
          key={i.id}
          src={i.url}
          width={200}
          height={200}
          alt="architectural image"
        />
      ))}
    </div>
  );
}
