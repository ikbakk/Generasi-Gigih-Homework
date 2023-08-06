import { useEffect, useState } from "react";
import axios from "axios";
import { SearchContent, Track } from "spotify-types";

interface HooksReturnValue {
  searchResult: Track[];
}

const useSearchTracks = (searchQuery: string): HooksReturnValue => {
  const [searchResult, setSearchResult] = useState<Track[]>([]);
  const accessToken: string | null = localStorage.getItem("access_token");

  useEffect(() => {
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
      }
    };

    if (searchQuery !== "") {
      fetchTracks();
    } else {
      setSearchResult([]);
    }
  }, [searchQuery]);

  return { searchResult };
};

export default useSearchTracks;
