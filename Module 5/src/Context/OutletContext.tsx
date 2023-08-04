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

  const generateCategoryEntries = () => {
    const slicedArray = (array: Track[]) => array.slice(0, 7);

    const ids = ["category1"];
    const names = ["Recommended Songs"];
    const items = [slicedArray(recommendedSongs)];

    const result = ids.map((id, index) => ({
      id,
      name: names[index],
      items: items[index],
    }));

    return result;
  };

  useEffect(() => {
    setRecommendedSongs(songs as Track[]);
  }, [songs]);

  useEffect(() => {
    setSearchedSongs(searchResult);
  }, [searchResult]);

  const categoryEntries = generateCategoryEntries();
  const contextValue = {
    categoryEntries,
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
