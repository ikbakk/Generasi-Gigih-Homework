import { createContext, useEffect, useState } from "react";
import { ContextProviderProps, ContextValue } from "./SongContextType";
import useSearchTracks from "../Hooks/useSearchTracks";
import { Track } from "spotify-types";
import useFetchRecommendedSongs from "../Hooks/useFetchRecommendedSongs";

const SongContext = createContext<ContextValue>({} as ContextValue);

const SongContextProvider = ({ children }: ContextProviderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [shownTracks, setShownTracks] = useState<Track[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const { searchResult, handleSearch } = useSearchTracks(searchQuery);
  const { recommendedSongs } = useFetchRecommendedSongs();

  useEffect(() => {
    if (!isSearching) {
      setShownTracks(recommendedSongs as Track[]);
    } else {
      setShownTracks(searchResult);
    }
  }, [recommendedSongs, isSearching, searchResult]);

  const contextValue = {
    searchResult,
    selectedPlaylist,
    shownTracks,
    isSearching,
    setIsSearching,
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
