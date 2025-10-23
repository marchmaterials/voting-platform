import { FullyEnrichedProject } from "@/types/dashboard";
import Winner from "../Winner";

export type Category = "micro" | "small" | "medium" | "large";

export type JudgeSelection<T> = {
  winners: Array<T>;
  honorableMentions: Array<T>;
};

export const judgeWinnersNameMap: Record<Category, JudgeSelection<string>> = {
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

export function JudgeSelectionView({
  selection,
  title,
}: {
  selection: JudgeSelection<FullyEnrichedProject>;
  title: string;
}) {
  return (
    <>
      <div>
        <h2 className="text-center font-bold text-3xl mb-2">{title}</h2>
        <h3 className="text-center font-bold text-l mb-10">First Prize</h3>
        <div className="flex flex-col sm:flex-row mx-auto items-center justify-center sm:divide-x sm:divide-gray-300 mb-10">
          {selection.winners.map((w) => (
            <div key={`w-${w.id}`} className="px-4">
              <Winner project={w} />
            </div>
          ))}
        </div>
        <div className="text-center font-bold text-2xl mb-10">
          {selection.honorableMentions.length == 1
            ? "Honourable Mention"
            : "Honourable Mentions"}
        </div>
        <div className="flex flex-col sm:flex-row mx-auto items-center justify-center sm:divide-x sm:divide-gray-300">
          {selection.honorableMentions.map((w) => (
            <div key={`w-${w.id}`} className="px-4">
              <Winner project={w} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
