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
    const btn = screen.getByRole("button", {
      name: /submit another project/i,
    });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("data-testid", "image-submit-again");
  });

  it("navigates back to /upload when button is clicked", () => {
    render(<ThankYouPage />);
    const btn = screen.getByRole("button", {
      name: /submit another project/i,
    });
    fireEvent.click(btn);
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith("/upload");
  });
});

