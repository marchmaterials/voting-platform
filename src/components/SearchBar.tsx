"use client";

import { Input } from "antd";
import { searchProjects } from "@/utils/dashboard";
import { useState } from "react";
import { useDataContext } from "@/app/context/dataContext";

export default function SearchBar() {
  const { setProjects } = useDataContext();
  const { Search } = Input;
  const onSearch = async (text: string) => {
    const filteredProjects = await searchProjects({ searchTerm: text });
    if (!(filteredProjects instanceof Error)) {
        console.log('fetched search results:', filteredProjects)
      setProjects(filteredProjects);
    }
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
