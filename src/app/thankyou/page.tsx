"use client";

import { Button } from "antd";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--background)] text-[var(--foreground)] p-10 text-center">
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

      <Button
        className="mt-6"
        type="primary"
        onClick={() => {
          window.location.href =
            "https://form.jotform.com/251335007801345";
        }}
        data-testid="submit-link-again"
      >
        Submit Another Project
      </Button>
    </div>
  );
}