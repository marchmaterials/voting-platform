"use client";
import { FullyEnrichedProject } from "@/types/dashboard";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ImageCard({
    project,
}: {
    project: FullyEnrichedProject;
}) {
    // const [loading, setLoading] = useState(true);
    const [showText, setShowText] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setShowText(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const titleImage = project.images.find((i) =>
        i.aiTags.includes("title-image")
    );
    const onClick = () => {
        if (window.innerWidth < 768) {
            setShowText(!showText)
        }
    }
    return (
        <div className="relative group w-[325px] sm:w-[400px] max-h-fit cursor-pointer mb-2" onClick={onClick} ref={wrapperRef}>
            <Image
                src={titleImage?.url ?? project.images[0].url}
                alt={`image of architectural project titled ${project.title}`}
                width={400}
                height={300}
                layout="responsive"
                loading="lazy"
                className="rounded-lg"
            // onLoad={() => setLoading(false)}
            />
            {/* <div
                className={`
          absolute inset-0 flex items-center justify-center
          bg-black/50 text-white text-xl font-bold
          rounded-xl transition-opacity duration-300 p-10
          ${showText ? "opacity-100" : "opacity-0"}
          group-hover:opacity-100
        `}
            >
                {project.title}
            </div> */}
            <div
                className={`
          absolute inset-0 flex items-center justify-center
          bg-black/50 text-white text-xl font-bold
          rounded-xl transition-opacity duration-300 p-10 sm:group-hover:opacity-100 group-hover:none
          ${showText ? "opacity-100" : "opacity-0"}
        `}
            >
                {project.title}
            </div>
        </div>
    );

}
