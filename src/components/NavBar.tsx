"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  if (pathname === "/upload" || pathname === "/thankyou") return null;
  return (
    <div className="w-full flex justify-start">
      <Link href={"/"}>
        <div
          className={`m-8 hover:text-black/60 ${
            pathname === "/" ? "font-bold" : ""
          }`}
        >
          MARCH
        </div>
      </Link>
      <Link href={"/dashboard"}>
        <div
          className={`m-8 hover:text-black/60 ${
            pathname === "/dashboard" ? "font-bold" : ""
          }`}
        >
          Public Voting
        </div>
      </Link>
      <Link href={"/awards"}>
        <div
          className={`m-8 hover:text-black/60 ${
            pathname === "/awards" ? "font-bold" : ""
          }`}
        >
          Awards 2025
        </div>
      </Link>
      <a href="https://www.app.marchmaterials.com">
        <div className="m-8 hover:text-black/60">Inspiration Board</div>
      </a>
    </div>
  );
}
