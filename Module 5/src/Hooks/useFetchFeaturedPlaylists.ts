import axios from "axios";
import { useEffect, useState } from "react";
import { Playlist, FeaturedPlaylists } from "spotify-types";

interface UseFeaturedPlaylistReturnValue {
  featuredPlaylist: Playlist[];
}

const useFeaturedPlaylist = (): UseFeaturedPlaylistReturnValue => {
  const [featuredPlaylist, setFeaturedPlaylist] = useState<Playlist[]>([]);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const accessToken: string | null = localStorage.getItem("access_token");

  useEffect(() => {
    if (isFetch) {
      const fetchFeaturedPlaylists = async (): Promise<void> => {
        try {
          const res = await axios.get<FeaturedPlaylists>(
            "https://api.spotify.com/v1/browse/featured-playlists?country=ID",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              params: {
                limit: 5,
              },
            },
          );

          setFeaturedPlaylist(res.data.playlists.items);
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

  return { featuredPlaylist };
};

export default useFeaturedPlaylist;
