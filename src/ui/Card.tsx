"use client";
import Image from "next/image";

export function Card({ title, images }: { title: string; images: [] }) {
  if (!images) return null;
  return (
    <div>
      <h5>{title}</h5>
      {images.map((i) => (
        <Image key={i.id} src={i.url} width={200} height={200} />
      ))}
    </div>
  );
}
