"use client";

import { Input } from "antd";
import { searchProjects } from "@/utils/dashboard";

export default function SearchBar() {
  const { Search } = Input;
  const onSearch = async (text: string) => {
    const filteredProjects = await searchProjects({ searchTerm: text });
    
  };

  return (
    <search>
      <form>
        <div className="">
          <Search
            placeholder="search projects by name or architect"
            id="search"
            onSearch={onSearch}
            enterButton
          />
        </div>
      </form>
    </search>
  );
}
