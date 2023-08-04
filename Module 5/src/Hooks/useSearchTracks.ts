import { useEffect, useState } from "react";
import axios from "axios";
import { SearchContent, Track } from "spotify-types";

interface HooksReturnValue {
  searchResult: Track[];
}

const useSearchTracks = (searchQuery: string): HooksReturnValue => {
  const [searchResult, setSearchResult] = useState<Track[]>([]);
  const [isFetch, setIsFetch] = useState<boolean>(false);

  const accessToken: string | null = localStorage.getItem("access_token");

  useEffect(() => {
    if (isFetch) {
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
          setIsFetch(false);
        }
      };
      fetchTracks();
    }
  }, [isFetch]);

  useEffect(() => {
    setIsFetch(true);
  }, [searchQuery]);

  return { searchResult };
};

export default useSearchTracks;
