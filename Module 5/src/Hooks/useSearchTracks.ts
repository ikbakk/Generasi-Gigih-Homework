import { useEffect, useState } from "react";
import axios from "axios";
import { SearchContent, Track } from "spotify-types";

const useSearchTracks = (
  searchQuery: string,
): {
  searchResult: Track[];
  handleSearch: () => void;
} => {
  const [searchResult, setSearchResult] = useState<Track[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const accessToken: string | null = localStorage.getItem("access_token");

  const fetchTracks = async (): Promise<void> => {
    try {
      const res = await axios.get<SearchContent>(
        "https://api.spotify.com/v1/search",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: searchQuery,
            type: "track",
          },
        },
      );
      const tracks = res.data.tracks!;
      setSearchResult(tracks.items);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (isSearching) {
      fetchTracks();
    }
  }, [isSearching]);

  const handleSearch = (): void => {
    setIsSearching(true);
  };

  return { searchResult, handleSearch };
};

export default useSearchTracks;
