import { AddButton } from "@/components/AddButton/AddButton";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { StatusSelect } from "@/components/StatusFilter/StatusFilter";
import { MyStories } from "@/containers/MyStories";

function Filters() {
  return (
    <div className="flex w-full gap-x-4 justify-between lg:w-auto">
      <SearchBar />
      <StatusSelect />
    </div>
  );
}

export default function MyStoriesPage() {
  return (
    <div className="h-screen w-screen">
      <div>
        <div className="py-5 px-4 max-w-full lg:w-[calc(100%-240px)]">
          <div className="flex justify-between flex-wrap items-center gap-y-6">
            <div className="lg:w-full">
              <h2 className="text-3xl text-primary font-bold">Stories</h2>
            </div>
            <AddButton>New Story</AddButton>
            <Filters />
          </div>
        </div>
        <MyStories />
      </div>
    </div>
  );
}
