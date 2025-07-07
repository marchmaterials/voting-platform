import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThankYouPage from "./page";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe("/thankyou page", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("renders the thank-you message", () => {
    render(<ThankYouPage />);
    expect(
      screen.getByText(/thank you for your submission/i)
    ).toBeInTheDocument();
  });

  it("renders the 'Submit Another Project' button", () => {
    render(<ThankYouPage />);
    const btn = screen.getByTestId("submit-link-again");
    expect(btn).toBeInTheDocument();
  });

  it("navigates to the JotForm when clicked", () => {
    render(<ThankYouPage />);
    const btn = screen.getByTestId("submit-link-again");

    const originalLocation = window.location;
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "" },
    });

    fireEvent.click(btn);

    expect(window.location.href).toBe(
      "https://form.jotform.com/251335007801345"
    );

    Object.defineProperty(window, "location", {
      configurable: true,
      value: originalLocation,
    });
  });
});

