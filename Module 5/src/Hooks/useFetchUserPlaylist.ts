import axios from "axios";
import { useEffect, useState } from "react";
import { UserPlaylist } from "../Types";

interface EndpointResponse {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: UserPlaylist[];
}

interface HooksReturnedValue {
  userPlaylists: UserPlaylist[];
}

const useFetchUserPlaylists = (): HooksReturnedValue => {
  const [userPlaylists, setUserPlaylists] = useState<UserPlaylist[]>([]);
  const accessToken: string | null = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchPlaylists = async (): Promise<void> => {
      try {
        const res = await axios.get<EndpointResponse>(
          "https://api.spotify.com/v1/users/iqbalfirdaus105/playlists",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        setUserPlaylists(res.data.items);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlaylists();
  }, []);

  return { userPlaylists };
};

export default useFetchUserPlaylists;
