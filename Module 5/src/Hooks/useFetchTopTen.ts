import axios from "axios";
import { useEffect, useState } from "react";
import { Track } from "spotify-types";

interface HooksReturnedValue {
  topTenSongs: Track[];
}

const useFetchTopTen = (): HooksReturnedValue => {
  const [topTenSongs, setTopTenSongs] = useState<Track[]>([]);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const accessToken: string | null = localStorage.getItem("access_token");

  useEffect(() => {
    if (isFetch) {
      const fetchTopTenUser = async (): Promise<void> => {
        try {
          const res = await axios.get<Track[]>(
            "https://api.spotify.com/v1/me/top/tracks",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );

          setTopTenSongs(res.data);
        } catch (err) {
          console.log(err);
        } finally {
          setIsFetch(false);
        }
      };

      fetchTopTenUser();
    }
  }, [isFetch]);

  useEffect(() => {
    setIsFetch(true);
  }, []);

  return { topTenSongs };
};

export default useFetchTopTen;
