import { Track } from "spotify-types";

export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextValue {
  recommendedSongs: Track[];
  searchedSongs: Track[];
  categoryEntries: CategoryEntry[];
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface CategoryEntry {
  id: string;
  name: string;
  items: Track[];
}
