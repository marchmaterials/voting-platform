"use client";
import ProjectCardNoVote from "@/components/ProjectCardNoVote";
import Winner from "@/components/Winner";
import { FullyEnrichedProject } from "@/types/dashboard";
import Link from "next/link";
import Masonry from "react-masonry-css";
import VotingResultsFooter from "./VotingResultsFooter";
import Image from "next/image";

type Category = "micro" | "small" | "medium" | "large";

type JudgeSelection<T> = {
  winners: Array<T>;
  honorableMentions: Array<T>;
};

const judgeWinnersNameMap: Record<Category, JudgeSelection<string>> = {
  micro: {
    winners: ["SWEAT. Sauna"],
    honorableMentions: ["Bienenskulptur", "Kiosk zur FÜRstin"],
  },
  small: {
    winners: ["office  Van Laethem - Architecten"],
    honorableMentions: ["Bademaschinen", "Re:House"],
  },
  medium: {
    winners: ["Omloop"],
    honorableMentions: ["House without any cement", "Hembrug A11"],
  },
  large: {
    winners: ["Augstine's Garden", "30+8 Social Housing units"],
    honorableMentions: ["Château de Beaucastel"],
  },
};

function JudgeSelectionView({
  selection,
  title,
}: {
  selection: JudgeSelection<FullyEnrichedProject>;
  title: string;
}) {
  return (
    <>
      <div>
        <div className="text-center font-bold text-3xl mb-10">{title}</div>
        <div className="flex flex-col sm:flex-row mx-auto items-center justify-center gap-8">
          {selection.winners.map((w) => (
            <Winner key={`w-${w.id}`} project={w} />
          ))}
        </div>
        <div className="text-center font-bold text-2xl mb-10">
          {selection.honorableMentions.length == 1
            ? "Honourable Mention"
            : "Honourable Mentions"}
        </div>
        <div className="flex flex-col sm:flex-row mx-auto items-center justify-center gap-8">
          {selection.honorableMentions.map((w) => (
            <Winner key={`w-${w.id}`} project={w} />
          ))}
        </div>
      </div>
    </>
  );
}

type JudgeFloatingHeadProps = {
  name: string;
  description: string;
  src: string;
};

const judgeFloatingHeads: JudgeFloatingHeadProps[] = [
  {
    name: "Anna Heringer",
    description: "Studio Anna Heringer",
    src: "/anna_heringer.jpeg",
  },
  {
    name: "Jan Jongert",
    description: "Superuse Studios",
    src: "/jan_jongert.jpeg",
  },
  {
    name: "Olga Ioannou",
    description: "TU Delft",
    src: "/olga_ioannou.jpeg",
  },
  {
    name: "Hattie Hartman",
    description: "Architects' Journal",
    src: "/hattie_hartman.jpeg",
  },
  {
    name: "Noel Wibrand",
    description: "Dorte Mandrup",
    src: "/noel_wibrand.jpeg",
  },
  {
    name: "Colin Chee",
    description: "Never Too Small",
    src: "/colin_chee.jpeg",
  },
  {
    name: "Leila Behjat",
    description: "Healthy Materials Lab",
    src: "/leila_behjat.jpeg",
  },
  {
    name: "Hilde Vanwildemeersch",
    description: "Woonder",
    src: "/hilde_vanwildemeersch.jpeg",
  },
  {
    name: "Alexandra Georgescu",
    description: "KOGAA",
    src: "/alexandra_georgescu.jpeg",
  },
  {
    name: "Ken De Cooman",
    description: "BC Architects",
    src: "/ken_de_cooman.jpeg",
  },
  {
    name: "Werner Schönthaler",
    description: "Hanfstein",
    src: "/werner_schönthaler.jpeg",
  },
  {
    name: "Imme Groet",
    description: "Building Balance",
    src: "/imme_groet.jpeg",
  },
  {
    name: "Anna Pellizzari",
    description: "Materially",
    src: "/anna_pellizzari.jpeg",
  },
  {
    name: "Christian Roggeman",
    description: "Gramitherm",
    src: "/christian_roggeman.jpeg",
  },
  {
    name: "Juan Carlos Bamba",
    description: "Bamba studio",
    src: "/juan_carlos_bamba.jpeg",
  },
  {
    name: "Dominik Campanella",
    description: "Concular",
    src: "/dominik_campanella.jpeg",
  },
  {
    name: "Marie Roels",
    description: "MARCH",
    src: "/marie_roels.jpeg",
  },
];

function JudgeFloatingHead({ name, description, src }: JudgeFloatingHeadProps) {
  return (
    <div className="flex flex-col text-center items-center w-32 mx-2 flex-shrink-0 mb-3">
      <Image
        src={src}
        width={200}
        height={200}
        alt={`headshot of ${name}`}
        className="w-28 h-28 object-cover rounded-full filter grayscale"
      />
      <p className={`font-bold text-s break-normal whitespace-normal mt-4`}>
        {name}
      </p>
      <p className="text-xs">{description}</p>
    </div>
  );
}

function FloatingInfoBox({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="min-w-[150px] flex-grow flex flex-col bg-[#277E25]/10 px-10 py-6 rounded-md text-center">
      <h4 className="font-bold text-xl">{title}</h4>
      <h5>{subTitle}</h5>
    </div>
  );
}

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
          <FloatingInfoBox title={"3"} subTitle={"Winners"} />
        </div>

        <div className="flex flex-col text-center my-10 px-24">
          <h2 className="text-2xl font-bold">Jury Awards</h2>
          <p className="text-l">
            <span className="font-bold">17 Judges</span> participated in the
            competition, evaluating your projects and awarding their favourites
          </p>
        </div>
        <div className="flex flex-wrap overflow-auto px-40 mx-auto justify-center">
          {judgeFloatingHeads.map((p) => (
            <JudgeFloatingHead key={p.name} {...p} />
          ))}
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

        {/* <div className="flex flex-row flex-wrap gap-2 justify-evenly items-center max-w-[1000px] mx-auto px-10">
                <FloatingInfoBox title={"100+"} subTitle={"Submissions"} />
                <FloatingInfoBox title={"17"} subTitle={"Countries"} />
                <FloatingInfoBox title={"36"} subTitle={"Finalists"} />
                <FloatingInfoBox title={"3"} subTitle={"Winners"} />
            </div> */}

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
