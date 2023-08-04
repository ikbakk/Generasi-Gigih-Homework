import axios from "axios";
import { useEffect, useState } from "react";
import { SimplifiedTrack, Recommendations } from "spotify-types";

interface HooksReturnedValue {
  recommendedSongs: SimplifiedTrack[];
}

const useFetchRecommendedSongs = (): HooksReturnedValue => {
  const [recommendedSongs, setRecommendedSongs] = useState<SimplifiedTrack[]>(
    [],
  );
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const accessToken: string | null = localStorage.getItem("access_token");

  useEffect(() => {
    if (isFetch) {
      const fetchFeaturedPlaylists = async (): Promise<void> => {
        try {
          const res = await axios.get<Recommendations>(
            "https://api.spotify.com/v1/recommendations",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );

          setRecommendedSongs(res.data.tracks);
        } catch (err) {
          console.log(err);
        } finally {
          setIsFetch(false);
        }
      };

      fetchFeaturedPlaylists();
    }
  }, [isFetch]);

  useEffect(() => {
    setIsFetch(true);
  }, []);

  return { recommendedSongs };
};

export default useFetchRecommendedSongs;
