import { AddButton } from "@/components/AddButton/AddButton";
import { Filters } from "@/components/Filters/Filters";
import { MyStories } from "@/containers/MyStories";

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
