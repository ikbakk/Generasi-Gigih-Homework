import { useState, useEffect } from "react";
import useFetchRecommendedSongs from "./useFetchRecommendedSongs";
import useFeaturedPlaylist from "./useFetchFeaturedPlaylists";
import { Track } from "spotify-types";
import useFetchPlaylist from "./useFetchPlaylist";
import useExtractPlaylistData from "./useExtractPlaylistData";

interface HooksParams {
  recommendedSongsSeeds?: {
    seed_artists?: string;
    seed_genres?: string;
    seed_tracks?: string;
  };
}

const useGenerateCategoryEntries = ({ recommendedSongsSeeds }: HooksParams) => {
  const { featuredPlaylist } = useFeaturedPlaylist();
  const { recommendedSongs } = useFetchRecommendedSongs(recommendedSongsSeeds!);
  const { ids, names, tracks } = useExtractPlaylistData(featuredPlaylist);
  console.log(tracks);

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [tes, setTes] = useState("tes");

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
  }, [windowSize]);

  useEffect(() => {}, []);

  function generateCategoryEntries() {
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
    };

    // const ids = ["recommended", ...playlistId];
    // const names = ["Recommended Songs", ...playlistName];
    // const items = [slicedArray(recommendedSongs as Track[])];

    // const result = ids.map((id, index) => ({
    //   id,
    //   name: names[index],
    //   items: items[index],
    // }));

    // return result
  }
  return { tes };
};

export default useGenerateCategoryEntries;
