"use client";

import { SearchBar } from "@/components/SearchBar/SearchBar";
import { StatusSelect } from "@/components/StatusFilter/StatusFilter";
import debounce from "lodash.debounce";
import { useState } from "react";

export function Filters() {
  const [search, setSearch] = useState<string | null>(null);

  const onSearch = debounce((e) => {
    const { value } = e.target;
    setSearch(value);
  }, 500);

  return (
    <div className="flex w-full gap-x-4 justify-between lg:w-auto relative">
      {search ? (
        <div className="absolute right-0 -top-[40px]">
          <pre>Searching... ?search={search}</pre>
        </div>
      ) : null}
      <SearchBar onSearch={onSearch} />
      <StatusSelect />
    </div>
  );
}
