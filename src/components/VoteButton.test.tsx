import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VoteButton from "./VoteButton";

describe("Votes Button", () => {
    const mockOnVote = jest.fn().mockResolvedValue({projectVotes: 5, userVotes: 1});
    const mockSetVotes = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the vote button", async () => {
        render(<VoteButton projectId="123" onVote={mockOnVote} setVotes={mockSetVotes} />);
        expect(screen.getByRole("button", { name: /vote/i })).toBeInTheDocument();
    });

    it("opens the modal when the button is clicked", async () => {
        render(<VoteButton projectId="123" onVote={mockOnVote} setVotes={mockSetVotes} />);
        fireEvent.click(screen.getByRole("button", { name: /vote/i }));
        expect(await screen.findByText(/enter your email/i)).toBeInTheDocument();
    });

    it("shows an error for invalid email", async () => {
        render(<VoteButton projectId="123" onVote={mockOnVote} setVotes={mockSetVotes} />);
        fireEvent.click(screen.getByRole("button", { name: /vote/i }));
        const submitButton = screen.getByRole("button", { name: /submit vote/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
        });

        expect(mockOnVote).not.toHaveBeenCalled();
    });

    it("submits a valid vote and updates vote count", async () => {
        render(<VoteButton projectId="123" onVote={mockOnVote} setVotes={mockSetVotes} />);
        fireEvent.click(screen.getByRole("button", { name: /vote/i }));

        const emailInput = screen.getByPlaceholderText(/your@email.com/i);
        await userEvent.type(emailInput, "user@example.com");

        const submitButton = screen.getByRole("button", { name: /submit vote/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockOnVote).toHaveBeenCalledWith("123", "user@example.com");
            expect(mockSetVotes).toHaveBeenCalledWith(5);
        });
    });
})