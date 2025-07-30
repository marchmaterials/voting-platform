import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VoteButton from "./VoteButton";
import { castVote } from "@/app/actions/vote";

jest.mock("@/app/actions/vote", () => ({
  castVote: jest.fn(),
}));

describe("Votes Button", () => {
  const mockSetVotes = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (castVote as jest.Mock).mockResolvedValue({
      projectVotes: 5,
      userVotes: 1,
    });
  });

  it("renders the vote button", async () => {
    render(<VoteButton projectId="123" setVotes={mockSetVotes} />);
    expect(screen.getByRole("button", { name: /vote/i })).toBeInTheDocument();
  });

  it("opens the modal when the button is clicked", async () => {
    render(<VoteButton projectId="123" setVotes={mockSetVotes} />);
    fireEvent.click(screen.getByRole("button", { name: /vote/i }));
    expect(await screen.findByTestId("email-input")).toBeInTheDocument();
  });

  it("shows an error for invalid email", async () => {
    render(<VoteButton projectId="123" setVotes={mockSetVotes} />);
    fireEvent.click(screen.getByRole("button", { name: /vote/i }));
    const submitButton = screen.getByRole("button", { name: /submit vote/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
    });

    expect(castVote).not.toHaveBeenCalled();
  });

  it("submits a valid vote and updates vote count", async () => {
    render(<VoteButton projectId="123" setVotes={mockSetVotes} />);
    fireEvent.click(screen.getByRole("button", { name: /vote/i }));

    const emailInput = screen.getByTestId("email-input");
    await userEvent.type(emailInput, "user@example.com");

    const submitButton = screen.getByRole("button", { name: /submit vote/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(castVote).toHaveBeenCalledWith("123", "user@example.com");
      expect(mockSetVotes).toHaveBeenCalledWith(5);
    });
  });
});
