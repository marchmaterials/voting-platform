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
