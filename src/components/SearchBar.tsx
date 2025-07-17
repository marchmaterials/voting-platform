"use client";

import { Input } from "antd";
import { searchProjects } from "@/utils/dashboard";
import { useDataContext } from "@/app/context/dataContext";

export default function SearchBar({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) {
  const { setFilteredProjects, setSearch } = useDataContext();
  const { Search } = Input;

  const onSearch = async (text: string) => {
    setSearch(text);
    setLoading(true);
    const filteredProjects = await searchProjects({ searchTerm: text });
    if (filteredProjects instanceof Error) {
      console.error("Error fetching search results:", filteredProjects);
      setFilteredProjects([]);
      setLoading(false);
      return;
    }
    console.log("fetched search results:", filteredProjects);
    setFilteredProjects(filteredProjects);
    setLoading(false);
  };

  return (
    <search>
      <form>
        <Search
          placeholder="search projects by name or architect"
          id="search"
          onSearch={onSearch}
          enterButton
          className="w-1/2"
        />
      </form>
    </search>
  );
}
