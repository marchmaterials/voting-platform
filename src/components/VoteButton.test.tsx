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
    render(<VoteButton projectId="123" setVotes={mockSetVotes} antdAdjustment={false} />);
    expect(screen.getByRole("button", { name: /vote/i })).toBeInTheDocument();
  });

  it("opens the modal when the button is clicked", async () => {
    render(<VoteButton projectId="123" setVotes={mockSetVotes} antdAdjustment={false} />);
    fireEvent.click(screen.getByRole("button", { name: /vote/i }));
    expect(await screen.findByTestId("email-input")).toBeInTheDocument();
  });

  it("shows an error if nothing is submitted", async () => {
    render(<VoteButton projectId="123" setVotes={mockSetVotes} antdAdjustment={false} />);
    fireEvent.click(screen.getByRole("button", { name: /vote/i }));
    const submitButton = screen.getByRole("button", { name: /submit vote/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/please enter your email/i)).toBeInTheDocument();
    });

    expect(castVote).not.toHaveBeenCalled();
  });

  it("submits a valid vote and updates vote count", async () => {
    render(<VoteButton projectId="123" setVotes={mockSetVotes} antdAdjustment={false} />);
    fireEvent.click(screen.getByRole("button", { name: /vote/i }));

    const emailInput = screen.getByTestId("email-input");
    await userEvent.type(emailInput, "user@example.com");

    // click the privacy policy
    const privacyPolictInput = screen.getByTestId("privacy-policy-input");
    await userEvent.click(privacyPolictInput);

    // select an option from the profession drop down
    const professionSelect = screen.getByRole("combobox");
    await userEvent.click(professionSelect);
    const professionOption = await screen.findByTitle("Architect");
    await userEvent.click(professionOption)

    const submitButton = screen.getByRole("button", { name: /submit vote/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSetVotes).toHaveBeenCalledWith(5);
      expect(castVote).toHaveBeenCalledWith("123", "user@example.com", "ARCHITECT", expect.any(String));
    });
  });
});
