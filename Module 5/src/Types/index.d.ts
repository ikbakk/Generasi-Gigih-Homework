import { Playlist, PlaylistTrack } from "spotify-types";

export interface CustomPlaylistTrack extends Omit<PlaylistTrack, "track"> {
  track: Track;
}

export interface CustomPlaylistResponse extends Omit<Playlist, "tracks"> {
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

export interface UserPlaylist extends Omit<Playlist, "tracks"> {
  tracks: {
    href: string;
    total: number;
  };
}
