import { Track } from "spotify-types";
import { useEffect, useState } from "react";
import { OutletContext } from "../../Context";
import { ContextProviderProps } from "../../Types/ContextTypes";
import useSearchTracks from "../../Hooks/useSearchTracks";
import useFetchRecommendedSongs from "../../Hooks/useFetchRecommendedSongs";
import useFeaturedPlaylist from "../../Hooks/useFetchFeaturedPlaylists";
import useExtractPlaylistData from "../../Hooks/useExtractPlaylistData";

const OutletContextProvider = ({ children }: ContextProviderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const recommendedSongsSeedsValue = {
    seed_genres: "k-pop,grunge,alt-rock",
  };

  const { searchResult } = useSearchTracks(searchQuery);
  const { recommendedSongs } = useFetchRecommendedSongs(
    recommendedSongsSeedsValue,
  );
  const { featuredPlaylist } = useFeaturedPlaylist();
  const { ids, names, tracks } = useExtractPlaylistData(featuredPlaylist);

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

    const newRecommendedSongs = slicedArray(recommendedSongs as Track[]);
    const newCategoryItems = tracks.map((tracks) => slicedArray(tracks!));

    if (tracks.length > 0) {
      const categoryIds = ["recommended", ...ids];
      const categoryNames = ["Recommended Songs", ...names];
      const categoryItems = [newRecommendedSongs, ...newCategoryItems];
      const moreCategoryItems = [recommendedSongs as Track[], ...tracks];

      const result = categoryIds.map((id, index) => ({
        id,
        name: categoryNames[index],
        items: categoryItems[index],
        moreItems: moreCategoryItems[index],
      }));

      return result;
    }

    return [];
  };

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
    recommendedSongs: recommendedSongs as Track[],
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
