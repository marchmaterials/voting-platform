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

// export function Gallery({ images }: { images: string[] }) {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   return (
//     <div className="h-full w-full min-w-0 min-h-0">
//       {/* Horizontal scroller, no vertical overflow */}
//       <div className="h-full w-full overflow-x-auto overflow-y-hidden">
//         <div className="h-full flex items-center gap-4" ref={scrollRef}>
//           {images.map((src, i) => (
//             <div key={src} className="relative h-full flex-shrink-0">
//               <Image
//                 src={src}
//                 alt={`Project image ${i + 1}`}
//                 width={1600}
//                 height={1200}
//                 // Fit image to available height; keep aspect ratio
//                 className="block h-full w-auto object-contain"
//                 sizes="(min-width: 1024px) 60vw, (min-width: 640px) 66vw, 90vw"
//                 priority={i === 0}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }