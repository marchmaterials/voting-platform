import { render, screen, waitFor } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { useDataContext } from "@/app/context/dataContext";
import { searchProjects } from "@/utils/search";
import { generateProject } from "@/tests/generators";
import { userEvent } from "@testing-library/user-event";

// Mock dependencies
jest.mock("@/app/context/dataContext", () => ({
  useDataContext: jest.fn()
}));
jest.mock("@/utils/search", () => ({
  searchProjects: jest.fn(),
}));

describe("SearchBar", () => {
  const setFilteredProjects = jest.fn();
  const setSearch = jest.fn();
  const setLoading = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useDataContext as jest.Mock).mockReturnValue({
      setFilteredProjects,
      setSearch,
      allProjects: []
    });
  });

  it("sets search term and calls searchProjects", async () => {
    (searchProjects as jest.Mock).mockReturnValue([]);
    render(<SearchBar setLoading={setLoading} />);
    const input = screen.getByTestId("search-bar");
    const button = screen.getByRole("button");

    await userEvent.type(input, "Modern House");
    await userEvent.click(button);

    await waitFor(() => {
      expect(setSearch).toHaveBeenCalledWith("Modern House");
      expect(searchProjects).toHaveBeenCalledWith([], "Modern House");
    });
  });

  it("updates filtered projects on search", async () => {
    const project = generateProject();

    (searchProjects as jest.Mock).mockReturnValue([project]);

    render(<SearchBar setLoading={setLoading} />);
    const input = screen.getByTestId("search-bar");
    const button = screen.getByRole("button");

    await userEvent.type(input, "Modern House");
    await userEvent.click(button);

    await waitFor(() => {
      expect(setFilteredProjects).toHaveBeenCalledWith([project]);
    });
  });

  it("preserves search term after search", async () => {
    const searchTerm = "ABC Architects";

    render(<SearchBar setLoading={setLoading} />);
    const input = screen.getByTestId("search-bar");
    await userEvent.type(input, searchTerm)
    const button = screen.getByRole("button");
    await userEvent.click(button);

    const inputAfterSearch = screen.getByTestId("search-bar");

    await waitFor(() => {
      expect(inputAfterSearch).toHaveValue(searchTerm);
    });
  });
});
