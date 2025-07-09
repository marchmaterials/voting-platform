import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

jest.mock("../actions/upload", () => ({
  generateImagekitSignature: jest.fn().mockResolvedValue({
    expire: "123",
    token: "token",
    signature: "sig",
  }),
}));

jest.mock("../../components/NavBar.tsx", () => ({
  __esModule: true,
  default: () => <div data-testid="navbar">Navbar</div>,
}));

describe("/upload page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the upload form", () => {
    render(<Page />);
    expect(
      screen.getByText(/The Final Step! Upload all images/i)
    ).toBeInTheDocument();
  });

  it("shows error if submitting with no files", async () => {
    render(<Page />);
    fireEvent.click(screen.getByRole("button", { name: /submit images/i }));
    await waitFor(() =>
      expect(
        screen.getByText(/please upload at least one image/i)
      ).toBeInTheDocument()
    );
  });

  it("does not render navbar so user cannot navigate away", () => {
    render(<Page />);
    expect(screen.queryByTestId("navbar")).not.toBeInTheDocument();
  });
});
