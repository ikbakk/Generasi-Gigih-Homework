import { Track } from "spotify-types";

export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface LoginContextValue {
  requestUrl: string | null;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OutletContextValue {
  recommendedSongs: Track[];
  searchedSongs: Track[];
  categoryEntries: OutletCategoryEntry[];
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface SongContextValue {
  selectedSong: Track;
  setSelectedSong: React.Dispatch<React.SetStateAction<Track>>;
}

interface OutletCategoryEntry {
  id: string;
  name: string;
  items: Track[];
}
