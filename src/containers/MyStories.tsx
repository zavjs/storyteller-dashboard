"use client";

import { Pagination } from "@/components/Pagination/Pagination";
import { Table } from "@/components/Table/Table";
import { useStories } from "@/hooks/useStories";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function MyStories() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const search = params.get("search") ?? "";
  const status = params.get("status") ?? "";
  const sort = params.get("sort") ?? "";

  const { stories } = useStories(search, status, sort);

  const onSort = (filter: string) => {
    const current = new URLSearchParams(Array.from(params.entries()));

    current.set("sort", filter);
    current.set("ordering", filter === sort ? "desc" : "asc");

    const search = current.toString();
    const query = search ? `?${search}` : "";
    const route = `${pathname}${query}`;

    router.push(route);
  };

  return (
    <div>
      <div className="w-screen page-content">
        {stories ? (
          <div>
            <Table items={stories} onSort={onSort} />
            <div className="w-full lg:w-[calc(100%-240px)]">
              <Pagination currentPage={1} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
