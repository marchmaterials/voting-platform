import Image from "next/image";

export type JudgeFloatingHeadProps = {
  name: string;
  description: string;
  src: string;
};

export const judgeFloatingHeads: JudgeFloatingHeadProps[] = [
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

export function JudgeFloatingHead({
  name,
  description,
  src,
}: JudgeFloatingHeadProps) {
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
