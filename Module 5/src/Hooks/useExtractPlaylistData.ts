import axios from "axios";
import { useEffect, useState } from "react";
import { Playlist, Track, PlaylistTrack } from "spotify-types";

interface CustomPlaylistTrack extends Omit<PlaylistTrack, "track"> {
  track: Track;
}

interface CustomPlaylistResponse extends Omit<Playlist, "tracks"> {
  tracks: {
    href: string;
    items: CustomPlaylistTrack[];
    limit: number;
    next: null | string;
    offset: number;
    previous: null | string;
    total: number;
  };
}

const useExtractPlaylistData = (playlists: Playlist[]) => {
  const [ids, setIds] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [tracks, setTracks] = useState<Track[][]>([]);
  const accessToken: string | null = localStorage.getItem("access_token");

  const getPlaylist = async (id: string) => {
    try {
      const res = await axios.get<CustomPlaylistResponse>(
        "https://api.spotify.com/v1/playlists/" + id,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      const tracks = res.data.tracks.items.map((track) => track.track);
      return tracks;
    } catch (err) {
      console.log(err);
      return [] as Track[];
    }
  };

  useEffect(() => {
    if (playlists.length > 0) {
      const ids = playlists.map((playlist) => playlist.id);
      const names = playlists.map((playlist) => playlist.name);
      const playlist = playlists.map((playlist) => getPlaylist(playlist.id));
      Promise.all(playlist).then((playlist) => {
        setIds(ids);
        setNames(names);
        setTracks(playlist);
      });
    }
  }, [playlists]);

  return { ids, names, tracks };
};

export default useExtractPlaylistData;
