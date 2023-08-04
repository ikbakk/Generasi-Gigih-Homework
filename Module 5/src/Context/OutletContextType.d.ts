import { Track } from "spotify-types";

export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextValue {
  recommendedSongs: Track[];
  searchedSongs: Track[];
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}
