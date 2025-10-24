import { FullyEnrichedProject } from "@/types/dashboard";
import { STAKEHOLDER_TYPE } from "@prisma/client";
import Link from "next/link";
import { Gallery } from "./Gallery";

interface WinnerProps {
  project: FullyEnrichedProject;
  position?: number;
}

export default function Winner({ project, position }: WinnerProps) {
  const architect = project.projectStakeholders.find((ps) =>
    ps.stakeholder.type.includes(STAKEHOLDER_TYPE.ARCHITECT)
  )?.stakeholder;
  const architectName = architect?.companyName;
  const architectUrl = architect?.url ?? "#";
  const imagesSorted = project.images.sort((a) =>
    a.aiTags.includes("title-image") ? -1 : 0
  );
  return (
    <div className="flex flex-col items-center justify-center mb-10 text-center">
      {position ? (
        <h4 className="font-bold text-m mb-1">#{position} Prize</h4>
      ) : null}

      <Link
        className="font-bold underline text-2xl mb-4 hover:opacity-75 px-4 sm:px-0"
        href={architectUrl}
      >
        {architectName}
      </Link>
      <h4 className="text-xl mb-4">{project.title}</h4>
      <p className="text-m text-center px-10 max-w-[800px]">
        {project.description}
      </p>
      <div className="mb-14 mt-4">
        <Link
          href={`/project/${project.titleSlug}`}
          className="inline-flex items-center justify-center bg-march_green text-black px-4 py-2 rounded-full font-semibold hover:opacity-75 transition-colors"
        >
          See project
        </Link>
      </div>
      <div className="flex flex-row flex-1 h-0 justify-around ">
        <div className="h-[400px] max-w-[1200px] flex px-2">
          <Gallery images={imagesSorted.map((i) => i.url)} />
        </div>
      </div>
      <div></div>
    </div>
  );
}
