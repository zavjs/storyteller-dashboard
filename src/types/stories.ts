export type StoryItemStatus =  "draft" | "scheduled" | "live" | "past"

export type StoryItem = {
  id: number;
  title: string;
  lastModified: string;
  ends: string;
  liveFrom?: string;
  publishDate?: string;
  status: StoryItemStatus;
  pages: string[];
};
