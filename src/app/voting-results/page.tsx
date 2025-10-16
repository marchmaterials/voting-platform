"use server"
import VotingResults from "@/components/VotingResults";
import { getAllProjects } from "@/utils/dashboard";
import { getVoteCount } from "@/utils/votingResults";


export default async function Page() {

    const voteCount = await getVoteCount()
    if (!voteCount.ok) {
        return <div>Something went wrong getting vote count</div>
    }
    const allProjects = await getAllProjects(13)
    if (!allProjects.ok) {
        return <div>Something went wrong getting projects</div>
    }
    return <VotingResults voteCount={voteCount.count} projects={allProjects.projects} />

}