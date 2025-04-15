"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Thank you for your submission!</h1>

      <Link href={"/forms"}>Submit another project</Link>
    </div>
  );
}
