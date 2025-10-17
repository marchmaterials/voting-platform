"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Gallery({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateEdges = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < max - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges);
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  // Scroll exactly one item (image) at a time
  const scrollByItems = (delta: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;

    // find the item whose left edge is closest to current scrollLeft
    const { scrollLeft } = el;
    let curr = 0;
    let best = Number.POSITIVE_INFINITY;
    items.forEach((item, i) => {
      const dist = Math.abs(item.offsetLeft - scrollLeft);
      if (dist < best) {
        best = dist;
        curr = i;
      }
    });

    const next = Math.max(0, Math.min(items.length - 1, curr + delta));
    el.scrollTo({ left: items[next].offsetLeft, behavior: "smooth" });
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-center">
      <button
        onClick={() => scrollByItems(-1)}
        className={`${!canScrollLeft ? "hidden" : ""} absolute left-2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div
        ref={scrollRef}
        className="flex flex-row overflow-x-auto gap-4 scroll-smooth"
      >
        {images.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={`Project image ${i + 1}`}
            width={800}
            height={800}
            className="h-[50vh] sm:h-auto max-w-full object-contain"
          />
        ))}
      </div>

      <button
        onClick={() => scrollByItems(1)}
        className={`${!canScrollRight ? "hidden" : ""} absolute right-2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

