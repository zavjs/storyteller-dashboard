"use client";

import { SearchBar } from "@/components/SearchBar/SearchBar";
import { StatusSelect } from "@/components/StatusFilter/StatusFilter";
import debounce from "lodash.debounce";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export function Filters() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const onChange = (e: any) => {
    const current = new URLSearchParams(Array.from(params.entries()));
    const { name, value } = e.target;

    if(name === 'search') {
      current.set('search', value)
    }
    if(name === 'status') {
      current.set('status', value.toLowerCase())
    }

    const currStr = current.toString();
    const query = currStr ? `?${currStr}` : "";
    const route = `${pathname}${query}`;

    router.push(route);
  };

  const onSearch = debounce(onChange, 500);

  return (
    <div className="flex w-full gap-x-4 justify-between lg:w-auto relative">
      <SearchBar onSearch={onSearch} />
      <StatusSelect onSelect={onChange} />
    </div>
  );
}
