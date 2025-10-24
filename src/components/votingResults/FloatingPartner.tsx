import Image from "next/image";

export type FloatingPartnerProps = {
  name: string;
  src: string;
};

export const partners: FloatingPartnerProps[] = [
  {
    name: "BioTwin",
    src: "/biotwin.png",
  },
  {
    name: "Hanfstein",
    src: "/hanfstein.png",
  },
  {
    name: "Gramitherm",
    src: "/gramitherm.png",
  },
  {
    name: "Materially",
    src: "/materially.png",
  },
  {
    name: "Outer Labs",
    src: "/outer_labs.png",
  },
  {
    name: "Avant Now",
    src: "/avant_now.png",
  },
  {
    name: "European Union",
    src: "/eu.png",
  },
];

export function FloatingPartner({ name, src }: FloatingPartnerProps) {
  return (
    <div className="flex flex-col text-center items-center w-32 mx-2 flex-shrink-0">
      <Image
        src={src}
        alt={`${name} logo`}
        width={200}
        height={200}
        className="w-28 h-28 object-cover rounded-full border border-gray-300 mb-4"
      />
      <p className="text-s font-bold">{name}</p>
    </div>
  );
}
