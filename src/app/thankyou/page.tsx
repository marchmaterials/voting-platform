"use client";

import React, { useEffect } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

function ThankYouMessage() {
  return (
    <div className="flex flex-col justify-center items-center p-10 text-center">
      <h3 className="text-green-600 text-2xl font-bold">
        Thank you for your submission! Your project details and images have
        successfully been submitted.
      </h3>
      <h1 className="font-semibold text-l m-4">
        You’ll get a confirmation email with payment details soon.
      </h1>
      <h5 className="font-thin">
        Payment is only required for the first project you submit. Any
        additional submissions are free of charge.
      </h5>
    </div>
  );
}

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) header.style.display = "none";
    return () => {
      if (header) header.style.display = "";
    };
  }, []);

  return (
    <div
      className="
      min-h-screen flex flex-col justify-center items-center
      bg-[var(--background)] text-[var(--foreground)]
      "
    >
      <ThankYouMessage />

      <Button
        className="mt-6"
        type="primary"
        onClick={() => {
          router.push("/upload");  
        }}
        data-testid="image-submit-again"
      >
        Submit Another Project
      </Button>
    </div>
  );
}
