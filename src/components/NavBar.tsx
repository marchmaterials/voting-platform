"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  if (pathname === "/upload") return null;
  return (
    <div className="w-full flex justify-start">
      <Link href={"/"}>
        <div className={`m-8 ${pathname === "/" ? "font-bold" : ""}`}>Home</div>
      </Link>
      <Link href={"/dashboard"}>
        <div className={`m-8 ${pathname === "/dashboard" ? "font-bold" : ""}`}>
          Dashboard
        </div>
      </Link>
    </div>
  );
}
