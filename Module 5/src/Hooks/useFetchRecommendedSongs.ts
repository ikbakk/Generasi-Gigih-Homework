import axios from "axios";
import { useEffect, useState } from "react";
import { SimplifiedTrack, Recommendations } from "spotify-types";

interface HooksReturnedValue {
  recommendedSongs: SimplifiedTrack[];
}

interface HooksParams {
  seed_artists?: string;
  seed_genres?: string;
  seed_tracks?: string;
}

const useFetchRecommendedSongs = (
  seedValue: HooksParams,
): HooksReturnedValue => {
  const [recommendedSongs, setRecommendedSongs] = useState<SimplifiedTrack[]>(
    [],
  );
  const accessToken: string | null = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchFeaturedPlaylists = async (): Promise<void> => {
      try {
        const res = await axios.get<Recommendations>(
          "https://api.spotify.com/v1/recommendations",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: seedValue,
          },
        );

        setRecommendedSongs(res.data.tracks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFeaturedPlaylists();
  }, []);

  return { recommendedSongs };
};

export default useFetchRecommendedSongs;
