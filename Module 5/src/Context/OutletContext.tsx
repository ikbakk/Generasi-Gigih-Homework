import { createContext, useEffect, useState } from "react";
import { ContextValue, ContextProviderProps } from "./OutletContextType";
import { Track } from "spotify-types";
import useFetchRecommendedSongs from "../Hooks/useFetchRecommendedSongs";
import useSearchTracks from "../Hooks/useSearchTracks";

const OutletContext = createContext<ContextValue>({} as ContextValue);

const OutletContextProvider = ({ children }: ContextProviderProps) => {
  const [recommendedSongs, setRecommendedSongs] = useState<Track[]>([]);
  const [searchedSongs, setSearchedSongs] = useState<Track[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { searchResult } = useSearchTracks(searchQuery);
  const { recommendedSongs: songs } = useFetchRecommendedSongs();

  useEffect(() => {
    setRecommendedSongs(songs as Track[]);
  }, [songs]);

  useEffect(() => {
    setSearchedSongs(searchResult);
  }, [searchResult]);

  const contextValue = {
    recommendedSongs,
    searchedSongs,
    setSearchQuery,
  };
  return (
    <OutletContext.Provider value={contextValue}>
      {children}
    </OutletContext.Provider>
  );
};

export { OutletContext, OutletContextProvider };
