import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../Content/Header";
import useFetchUserPlaylists from "../../Hooks/useFetchUserPlaylist";
import axios from "axios";
import { Track, PlaylistTrack } from "spotify-types";
import { UserPlaylist } from "../../Types";
import Songs from "../Content/Songs";

interface Response {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: PlaylistTrack[];
}

const UserPlaylistSongs = () => {
  const params = useParams();
  const { userPlaylists } = useFetchUserPlaylists();
  const [userPlaylist, setUserPlaylist] = useState<UserPlaylist>();
  const [tracks, setTracks] = useState<Track[]>([]);
  const foundUserPlaylist = userPlaylists.find(
    (playlist) => playlist.id === params.playlistId,
  );
  const accessToken: string | null = localStorage.getItem("access_token");

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const res = await axios.get<Response>(
          `${foundUserPlaylist?.tracks.href}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        const tracks = res.data.items.map((track) => track.track) as Track[];
        setTracks(tracks);
      } catch (err) {
        console.log(err);
      }
    };

    getPlaylist();

    setUserPlaylist(foundUserPlaylist);
  }, [foundUserPlaylist, params.id]);

  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Songs title={userPlaylist?.name ?? ""} tracks={tracks} />
    </div>
  );
};

export default UserPlaylistSongs;
