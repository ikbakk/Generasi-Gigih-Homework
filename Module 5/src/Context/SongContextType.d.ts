import { Track } from "spotify-types";

export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextValue {
  searchResult: Track[];
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  selectedPlaylist: string;
  setSelectedPlaylist: React.Dispatch<React.SetStateAction<string>>;
  shownTracks: Track[];
  setShownTracks: React.Dispatch<React.SetStateAction<Track[]>>;
}
