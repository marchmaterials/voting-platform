import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { useDataContext } from "@/app/context/dataContext";
import { searchProjects } from "@/utils/dashboard";
import { generateProject } from "@/tests/generators";

// Mock dependencies
jest.mock("@/app/context/dataContext", () => ({
  useDataContext: jest.fn(),
}));
jest.mock("@/utils/dashboard", () => ({
  searchProjects: jest.fn(),
}));

describe("SearchBar", () => {
  const setFilteredProjects = jest.fn();
  const setSearch = jest.fn();
  const setLoading = jest.fn();

  beforeEach(() => {
    (useDataContext as jest.Mock).mockReturnValue({
      setFilteredProjects,
      setSearch,
    });
    jest.clearAllMocks();
  });

  it("sets search term and calls searchProjects", async () => {
    (searchProjects as jest.Mock).mockResolvedValue([]);
    render(<SearchBar setLoading={setLoading} />);
    const input = screen.getByTestId("search-bar");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Modern House" } });
    fireEvent.click(button);

    // Wait for async onSearch
    await screen.getByTestId("search-bar");

    expect(setSearch).toHaveBeenCalledWith("Modern House");
    expect(searchProjects).toHaveBeenCalledWith({ searchTerm: "Modern House" });
  });

  it("updates filtered projects on search", async () => {
    const project = generateProject();
    (searchProjects as jest.Mock).mockResolvedValue([project]);

    render(<SearchBar setLoading={setLoading} />);
    const input = screen.getByRole("searchbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Jane Doe" } });
    fireEvent.click(button);

    await screen.getByTestId("search-bar");

    expect(setFilteredProjects).toHaveBeenCalledWith([project]);
  });
});
