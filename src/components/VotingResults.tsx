"use client";
import ProjectCardNoVote from "@/components/ProjectCardNoVote";
import Winner from "@/components/Winner";
import { FullyEnrichedProject } from "@/types/dashboard";
import Link from "next/link";
import Masonry from "react-masonry-css";
import VotingResultsFooter from "./VotingResultsFooter";
import { FloatingPartner, partners } from "./votingResults/FloatingPartner";
import FloatingInfoBox from "./votingResults/FloatingInfoBox";
import {
  JudgeFloatingHead,
  judgeFloatingHeads,
} from "./votingResults/JudgeFloatingHead";
import {
  Category,
  JudgeSelection,
  JudgeSelectionView,
  judgeWinnersNameMap,
} from "./votingResults/JudgeSelection";

export default function VotingResults({
  voteCount,
  projects,
}: {
  voteCount: number;
  projects: Array<FullyEnrichedProject>;
}) {
  const winners = projects.slice(0, 3);
  const topTen = projects.slice(3, 13);

  const findProject = (title: string): FullyEnrichedProject => {
    const project = projects.find((p) => p.title.includes(title));
    if (!project) {
      throw new Error(`Couldn't find project ${title}`);
    }
    return project;
  };

  const judgeWinnersMap: Record<
    Category,
    JudgeSelection<FullyEnrichedProject>
  > = Object.fromEntries(
    Object.entries(judgeWinnersNameMap).map(([key, value]) => [
      key,
      {
        winners: value.winners.map(findProject),
        honorableMentions: value.honorableMentions.map(findProject),
      },
    ])
  ) as Record<Category, JudgeSelection<FullyEnrichedProject>>;

  return (
    <>
      <div className="bg-[#FBFEFA] pb-14">
        <div className="flex flex-col px-40 py-52 text-center justify-center items-center gap-4 mb-6 bg-[url('/march-competition.-.Forest_Gate_House.-.hello--at--lsdarchitects.co.uk.-.Forest_Gate_extension_by_LSD_Architects__12___m6SWQthF.jpg')] bg-cover bg-center bg-black/50  bg-blend-multiply">
          <p className="font-bold text-5xl text-white">
            {"Here's to the winners!"}
          </p>
          <Link
            href={`https://www.app.marchmaterials.com`}
            className="inline-flex items-center w-48 justify-center bg-march_green text-black px-4 py-2 rounded-full font-semibold hover:opacity-75 transition-colors"
          >
            Get inspired
          </Link>
        </div>

        <div className="flex flex-row flex-wrap gap-2 justify-evenly items-center max-w-[1000px] mx-auto px-10">
          <FloatingInfoBox title={"100+"} subTitle={"Submissions"} />
          <FloatingInfoBox title={"17"} subTitle={"Countries"} />
          <FloatingInfoBox title={"36"} subTitle={"Finalists"} />
          <FloatingInfoBox title={"5"} subTitle={"Winners"} />
        </div>
        <div className="mb-20">
          <div className="flex flex-col text-center mt-14 mb-4 px-24">
            <h2 className="text-l font-bold">Our Partners</h2>
          </div>
          <div className="flex overflow-x-auto px-4 sm:flex-wrap sm:overflow-auto sm:px-40 sm:mx-auto sm:justify-center">
            {partners.map((p) => (
              <FloatingPartner key={p.name} {...p} />
            ))}
          </div>
        </div>
        <div className="flex flex-col text-center my-10 px-24">
          <h2 className="text-3xl font-bold mb-4">Jury Awards</h2>
          <p className="text-l">
            Our <span className="font-bold">17 Judges</span> carefully assessed
            the environmental and social impact of each project and awarded 5
            prize winners and 7 honourable mentions.
          </p>
        </div>
        <div className="px-4 sm:px-40">
          <div className="flex overflow-x-auto">
            {judgeFloatingHeads.map((p) => (
              <JudgeFloatingHead key={p.name} {...p} />
            ))}
          </div>
        </div>

        <div className="mt-14 sm:my-14">
          <JudgeSelectionView
            selection={judgeWinnersMap.large}
            title={"Large Category"}
          />
        </div>

        <div className="mt-14 sm:my-14">
          <JudgeSelectionView
            selection={judgeWinnersMap.medium}
            title={"Medium Category"}
          />
        </div>
        <div className="mt-14 sm:my-14">
          <JudgeSelectionView
            selection={judgeWinnersMap.small}
            title={"Small Category"}
          />
        </div>
        <div className="mt-14 sm:my-14">
          <JudgeSelectionView
            selection={judgeWinnersMap.micro}
            title={"Micro Category"}
          />
        </div>
        <div className="px-10">
          <hr />
        </div>
        <div className="flex flex-col items-center justify-center mt-28 text-center px-2 sm:px-0">
          <h2 className="text-3xl font-bold mb-2">Community favorites</h2>
          <p className="text-xl">
            Over <span className="font-bold">{voteCount} votes </span>were cast
            in just one month!
          </p>
          <p className="text-xl">
            Here are the top three projects chosen by our community.
          </p>
        </div>
      </div>

      <div className="mt-14 sm:my-14">
        {winners.map((w, idx) => (
          <Winner key={`w-${w.id}`} project={w} position={idx + 1} />
        ))}
      </div>

      <div className="flex flex-col text-center sm:mb-24 bg-[#FBFEFA] py-14">
        <h4 className="text-xl font-bold">Top 10</h4>
        <div className="flex items-center justify-center">
          <Masonry
            data-testid="project-grid"
            breakpointCols={{ default: 2, 1000: 1 }}
            className="flex m-4 w-auto"
            columnClassName="sm:pl-4 bg-clip-padding"
          >
            {topTen.map((p) => (
              <ProjectCardNoVote key={p.id} project={p} />
            ))}
          </Masonry>
        </div>
      </div>
      <VotingResultsFooter />
      <div className="my-6"></div>
    </>
  );
}
