"use client"
import ProjectCardNoVote from "@/components/ProjectCardNoVote";
import Winner from "@/components/Winner";
import { FullyEnrichedProject } from "@/types/dashboard";
import Link from "next/link";
import Masonry from "react-masonry-css";
import VotingResultsFooter from "./VotingResultsFooter";


// function FloatingInfoBox({ title, subTitle }: { title: string, subTitle: string }) {
//     return (
//         <div className="min-w-[150px] flex-grow flex flex-col bg-[#277E25]/10 px-10 py-6 rounded-md text-center">
//             <h4 className="font-bold text-xl">{title}</h4>
//             <h5>{subTitle}</h5>
//         </div >
//     )
// }

export default function VotingResults({ voteCount, projects }: { voteCount: number, projects: Array<FullyEnrichedProject> }) {
    const winners = projects.slice(0, 3)
    const topTen = projects.slice(3, 13)

    return (<>
        <div className="bg-[#FBFEFA] pb-14">
            <div
                className="flex flex-col px-40 py-52 text-center justify-center items-center gap-4 mb-6 bg-[url('/march-competition.-.Forest_Gate_House.-.hello--at--lsdarchitects.co.uk.-.Forest_Gate_extension_by_LSD_Architects__12___m6SWQthF.jpg')] bg-cover bg-center bg-black/50  bg-blend-multiply"
            >
                <p className="font-bold text-5xl text-white">{"Here's to the winners!"}</p>
                <Link
                    href={`/dashboard`}
                    className="inline-flex items-center w-48 justify-center bg-march_green text-black px-4 py-2 rounded-full font-semibold hover:opacity-75 transition-colors"
                >
                    Explore Projects
                </Link>
            </div>

            {/* <div className="flex flex-row flex-wrap gap-2 justify-evenly items-center max-w-[1000px] mx-auto px-10">
                <FloatingInfoBox title={"100+"} subTitle={"Submissions"} />
                <FloatingInfoBox title={"17"} subTitle={"Countries"} />
                <FloatingInfoBox title={"36"} subTitle={"Finalists"} />
                <FloatingInfoBox title={"3"} subTitle={"Winners"} />
            </div> */}

            <div className="flex flex-col items-center justify-center mt-28 text-center px-2 sm:px-0">
                <h2 className="text-3xl font-bold mb-2">Community favorites</h2>
                <p className="text-xl">
                    Over <span className="font-bold">{voteCount} votes{" "}</span>were cast in just one month!
                </p>
                <p className="text-xl">Here are the top three projects chosen by our community.</p>
            </div>
        </div>

        <div className="my-14">
            {winners.map((w, idx) => <Winner key={`w-${w.id}`} project={w} position={idx + 1} />)}
        </div>

        <div className="flex flex-col text-center mb-24 bg-[#FBFEFA] py-14">
            <h4 className="text-xl font-bold">Top 10</h4>
            <div className="flex items-center justify-center">
                <Masonry
                    data-testid="project-grid"
                    breakpointCols={{ default: 2, 1000: 1 }}
                    className="flex m-4 w-auto"
                    columnClassName="sm:pl-4 bg-clip-padding"
                >
                    {topTen.map(p => <ProjectCardNoVote key={p.id} project={p} />)}
                </Masonry>
            </div>
        </div>
        <VotingResultsFooter />
        <div className="my-6"></div>
    </>
    )
}