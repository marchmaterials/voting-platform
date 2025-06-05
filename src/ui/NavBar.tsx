"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
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
      {/* now that we are using react 18 because of the upload widget with antd, we need to refactor to us useFormState and useFormStatus before this is functional again */}
      {/* <Link href={"/forms"}>
        <div className={`m-8 ${pathname === "/forms" ? "font-bold" : ""}`}>
          Submit Project
        </div>
      </Link> */}
    </div>
  );
}
