import axios from "axios";
import { useEffect, useState } from "react";
import { Playlist } from "spotify-types";

interface EndpointResponse {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Playlist[];
}

interface HooksReturnedValue {
  userPlaylists: Playlist[];
}

const useFetchUserPlaylists = (): HooksReturnedValue => {
  const [userPlaylists, setUserPlaylists] = useState<Playlist[]>([]);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const accessToken: string | null = localStorage.getItem("access_token");

  useEffect(() => {
    if (isFetch) {
      const fetchPlaylists = async (): Promise<void> => {
        try {
          const res = await axios.get<EndpointResponse>(
            "https://api.spotify.com/v1/users/iqbalfirdaus105/playlists",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              params: {
                seed_genres: "k-pop,grunge,alt-rock",
              },
            },
          );

          setUserPlaylists(res.data.items);
        } catch (err) {
          console.log(err);
        } finally {
          setIsFetch(false);
        }
      };

      fetchPlaylists();
    }
  }, [isFetch]);

  useEffect(() => {
    setIsFetch(true);
  }, []);

  return { userPlaylists };
};

export default useFetchUserPlaylists;
