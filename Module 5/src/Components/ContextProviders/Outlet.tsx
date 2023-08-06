import { Track } from "spotify-types";
import { useEffect, useState } from "react";
import { OutletContext } from "../../Context";
import { ContextProviderProps } from "../../Types/ContextTypes";
import useSearchTracks from "../../Hooks/useSearchTracks";
import useFetchRecommendedSongs from "../../Hooks/useFetchRecommendedSongs";

const OutletContextProvider = ({ children }: ContextProviderProps) => {
  const [recommendedSongs, setRecommendedSongs] = useState<Track[]>([]);
  const [searchedSongs, setSearchedSongs] = useState<Track[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const recommendedSongsSeedsValue = {
    seed_genres: "k-pop,grunge,alt-rock",
  };

  const { searchResult } = useSearchTracks(searchQuery);
  const { recommendedSongs: songs } = useFetchRecommendedSongs(
    recommendedSongsSeedsValue,
  );

  const generateCategoryEntries = () => {
    const slicedArray = (array: Track[]) => array.slice(0, 7);

    const ids = ["recommended"];
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

export default OutletContextProvider;
