import { EnrichedProjectMaterials, FullyEnrichedProject } from "@/types/dashboard";
import VoteButton from "./VoteButton";
import { Sidebar } from "./Sidebar";
import { Gallery } from "./Gallery";

export default function DetailedProjectView({
    images,
    materials,
    title,
    project,
    votes,
    setVotes,
}: Props) {
    return (
        <div className=" bg-white rounded-lg shadow-lg w-[90vw] h-[85vh] flex flex-col min-h-0">
           
            <div className="flex flex-row items-center max-h-fit p-4 justify-between shrink-0">
                <h2 className="text-md sm:text-2xl font-extrabold pr-4">{title}</h2>
                {(setVotes ? (<VoteButton projectId={project.id} setVotes={setVotes} antdAdjustment={true} />): null)}
            </div>

            {/* mobile view */}
            <div className="min-h-0 overflow-y-auto sm:overflow-y-hidden sm:hidden">
                <div className="flex sm:flex-row flex-col-reverse flex-1 justify-around">
                    <div className="h-1/3 sm:h-full w-full sm:w-1/3 sm:max-w-[320px] overflow-y-auto">
                        <Sidebar materials={materials} project={project} />
                    </div>
                    <div className="h-2/3 sm:h-full sm:w-2/3 flex mb-2 sm:mb-0">
                        <Gallery images={images} />
                    </div>
                </div>
            </div>
            {/* desktop view */}
            <div className="hidden sm:flex sm:flex-row flex-1 h-0 justify-around">
                <div className="h-1/3 sm:h-full w-full sm:w-1/3 sm:max-w-[320px] overflow-y-auto">
                    <Sidebar materials={materials} project={project} />
                </div>
                <div className="h-2/3 sm:h-full sm:w-2/3 flex mb-2 sm:mb-0">
                    <Gallery images={images} />
                </div>
            </div>
            <div className="p-4 border-t mt-auto">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">Votes: {votes}</div>
                </div>
            </div>
        </div>
    )
}


type Props = {
    images: string[];
    materials: EnrichedProjectMaterials;
    title: string;
    project: FullyEnrichedProject;
    votes: number;
    setVotes?: React.Dispatch<React.SetStateAction<number>>;
};
