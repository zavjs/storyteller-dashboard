import { useEffect, useState } from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import mockStories from "@/data/stories.mock.json";
import { StoryItem } from "@/types/stories";

const mock = new MockAdapter(axios);

mock.onGet("/stories").reply(200, {
  stories: mockStories,
});

export function useStories(
  search?: string,
  status?: string,
  ordering?: string
) {
  const [stories, setStories] = useState<StoryItem[] | null>(null);

  useEffect(() => {
    (async function getStories() {
      axios
        .get("/stories", {
          params: {
            search,
            status,
            ordering,
          },
        })
        .then((res) => {
          if (res.data.stories) {
            setStories(res.data.stories);
          }
        });
    })();
  }, [search, status, ordering]);

  return {
    stories,
  };
}
