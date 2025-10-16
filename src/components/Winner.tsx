import { FullyEnrichedProject } from "@/types/dashboard";
import { STAKEHOLDER_TYPE } from "@prisma/client";
import Link from "next/link";
import { Gallery } from "./Gallery";

interface WinnerProps {
    project: FullyEnrichedProject,
    position: number
}


export default function Winner({ project, position }: WinnerProps) {
    const architectName = project.projectStakeholders.find(ps => ps.stakeholder.type.includes(STAKEHOLDER_TYPE.ARCHITECT))?.stakeholder.companyName

    return (
        <div className="flex flex-col items-center justify-center mb-10 last:mb-0 text-center">
            <h4 className="font-bold text-m mb-1">#{position} Prize</h4>
            <h3 className="font-bold underline text-2xl mb-4">{architectName}</h3>
            <h4 className="text-xl mb-4">{project.title}</h4>
            <p className="text-m text-center mb-4 px-10 max-w-[800px]">{project.description}</p>
            <div className="mb-10">
                <Link
                    href={`/projects/${project.titleSlug}`}
                    className="inline-flex items-center justify-center bg-march_green text-black px-4 py-2 rounded-full font-semibold hover:bg-emerald-600 transition-colors"
                >
                    See project
                </Link>

            </div>
            <div className="flex flex-row flex-1 h-0 justify-around ">
                <div className="h-[400px] max-w-[1200px] flex mb-2 px-2">
                    <Gallery images={project.images.map(i => i.url)} />
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}