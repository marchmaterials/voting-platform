"use server"
import Winner from "@/components/Winner";
import { getAllProjects } from "@/utils/dashboard";
import { getVoteCount } from "@/utils/votingResults";
import Link from "next/link";


function FloatingInfoBox({ title, subTitle }: { title: string, subTitle: string }) {
    return (
        <div className="min-w-[150px] flex-grow flex flex-col bg-[#277E25]/10 px-10 py-6 rounded-md text-center">
            <h4 className="font-bold text-xl">{title}</h4>
            <h5>{subTitle}</h5>
        </div >
    )
}

export default async function VotingResults() {
    const voteCount = await getVoteCount()
    if (!voteCount.ok) {
        return <div>Something went wrong getting vote count</div>
    }
    const allProjects = await getAllProjects()
    if (!allProjects.ok) {
        return <div>Something went wrong getting projects</div>
    }
    const winners = allProjects.projects.slice(0, 3)

    return (<>
        <div className="flex flex-col p-36 text-center justify-center items-center gap-4 bg-slate-500 mb-6">
            <p className="font-bold text-5xl text-white">{"Here's to the winners!"}</p>
            <Link
                href={`/dashboard`}
                className="inline-flex items-center w-48 justify-center bg-march_green text-black px-4 py-2 rounded-full font-semibold hover:bg-emerald-600 transition-colors"
            >
                Explore Projects
            </Link>
        </div>

        <div className="flex flex-row flex-wrap gap-2 justify-evenly items-center max-w-[1000px] mb-16 mx-auto px-10">
            <FloatingInfoBox title={"100+"} subTitle={"Submissions"} />
            <FloatingInfoBox title={"17"} subTitle={"Countries"} />
            <FloatingInfoBox title={"36"} subTitle={"Finalists"} />
            <FloatingInfoBox title={"3"} subTitle={"Winners"} />
        </div>

        <div className="flex flex-col items-center justify-center mb-16 text-center">
            <h2 className="text-2xl font-bold mb-2">Community favorites</h2>
            <p>
                Over <span className="font-bold">{voteCount.count} votes{" "}</span>were cast in just two months!
            </p>
            <p>Here are the top three projects chosen by the community</p>
        </div>

        <div>
            {winners.map((w, idx) => <Winner key={idx} project={w} position={idx + 1} />)}
        </div>
    </>)
}