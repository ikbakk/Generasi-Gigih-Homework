import { SimplifiedTrack, Track } from "spotify-types";

export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextValue {
  searchResult: Track[];
  shownTracks: Track[];
  isSearching: boolean;
  selectedPlaylist: string;
  handleSearch: () => void;
  setShownTracks: React.Dispatch<React.SetStateAction<Track[]>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedPlaylist: React.Dispatch<React.SetStateAction<string>>;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}
