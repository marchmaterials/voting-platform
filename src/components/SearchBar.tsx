"use client";

import { Input } from "antd";
import { searchProjects } from "@/utils/dashboard";
import { useDataContext } from "@/app/context/dataContext";

export default function SearchBar({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) {
  const { setFilteredProjects, setSearch, search } = useDataContext();

  const { Search } = Input;

  const onSearch = async (text: string) => {
    setSearch(text);
    if (!text) return;
    setLoading(true);
    const filteredProjects = await searchProjects({ searchTerm: text });
    if (filteredProjects instanceof Error) {
      console.error("Error fetching search results:", filteredProjects);
      setFilteredProjects([]);
      setLoading(false);
      return;
    }
    setFilteredProjects(filteredProjects);
    setLoading(false);
  };

  return (
    <search className="w-4/5">
      <Search
        placeholder="search projects by name or architect"
        id="search"
        data-testid="search-bar"
        defaultValue={search}
        onSearch={onSearch}
        enterButton
      />
    </search>
  );
}
