import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VoteButton from "./VoteButton";

beforeEach(() => {
  localStorage.clear();
});

describe("Votes Button", () => {
    const mockProjectId = "project-123";

    test("renders the vote button and intial vote count", () => {
        render(<VoteButton projectId={mockProjectId} />);
        expect(screen.getByText(/votes: 0/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /vote for this project/i })).toBeInTheDocument();
    })

    test("opens modal when button is clicked", async () => {
        render(<VoteButton projectId={mockProjectId} />);
        const button = screen.getByRole("button", { name: /vote for this project/i });
        await userEvent.click(button);
        expect(screen.getByText(/enter your email to vote/i)).toBeInTheDocument();
    });

})