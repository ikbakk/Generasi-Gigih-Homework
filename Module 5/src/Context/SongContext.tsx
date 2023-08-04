import { createContext, useEffect, useState } from "react";
import { ContextProviderProps, ContextValue } from "./SongContextType";
import useSearchTracks from "../Hooks/useSearchTracks";
import { Track } from "spotify-types";
import useFetchRecommendedSongs from "../Hooks/useFetchRecommendedSongs";

const SongContext = createContext<ContextValue>({} as ContextValue);

const SongContextProvider = ({ children }: ContextProviderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [shownTracks, setShownTracks] = useState<Track[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const { searchResult, handleSearch } = useSearchTracks(searchQuery);

  const { recommendedSongs } = useFetchRecommendedSongs();

  useEffect(() => {
    setShownTracks(shownTracks);
  }, [recommendedSongs]);

  const contextValue = {
    searchResult,
    selectedPlaylist,
    shownTracks,
    setShownTracks,
    setSelectedPlaylist,
    setSearchQuery,
    handleSearch,
  };
  return (
    <SongContext.Provider value={contextValue}>{children}</SongContext.Provider>
  );
};

export { SongContext, SongContextProvider };
