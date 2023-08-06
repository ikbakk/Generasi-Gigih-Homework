import { Track } from "spotify-types";
import { useEffect, useState } from "react";
import { OutletContext } from "../../Context";
import { ContextProviderProps } from "../../Types/ContextTypes";
import useSearchTracks from "../../Hooks/useSearchTracks";
import useFetchRecommendedSongs from "../../Hooks/useFetchRecommendedSongs";

const OutletContextProvider = ({ children }: ContextProviderProps) => {
  const [recommendedSongs, setRecommendedSongs] = useState<Track[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const recommendedSongsSeedsValue = {
    seed_genres: "k-pop,grunge,alt-rock",
  };

  const { searchResult } = useSearchTracks(searchQuery);
  const { recommendedSongs: songs } = useFetchRecommendedSongs(
    recommendedSongsSeedsValue,
  );

  const generateCategoryEntries = () => {
    const slicedArray = (array: Track[]) => {
      if (windowSize > 768 && windowSize <= 1024) {
        return array.slice(0, 3);
      }
      if (windowSize > 1024 && windowSize <= 1280) {
        return array.slice(0, 4);
      }
      if (windowSize > 1280) {
        return array.slice(0, 7);
      }

      return array.slice(0, 2);
    };

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
    const handleResize = () => {
      const windowSize = window.innerWidth;
      setWindowSize(windowSize);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const categoryEntries = generateCategoryEntries();
  const contextValue = {
    categoryEntries,
    recommendedSongs,
    setSearchQuery,
    searchResult,
  };
  return (
    <OutletContext.Provider value={contextValue}>
      {children}
    </OutletContext.Provider>
  );
};

export default OutletContextProvider;
