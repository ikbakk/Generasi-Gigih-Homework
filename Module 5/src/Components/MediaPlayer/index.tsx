import { useContext } from "react";
import { SongContext } from "../../Context";

import MusicInfo from "./MusicInfo";
import OtherControls from "./OtherControl";
import PlaybackControl from "./PlaybackControl";
import { Track } from "spotify-types";

const MediaPlayer = () => {
  const { selectedSong } = useContext(SongContext);

  const isEmptyObject = (selectedSong: Track) => {
    if (typeof selectedSong === "object" && selectedSong !== null) {
      return Object.keys(selectedSong).length === 0;
    }
    return false;
  };

  return (
    <div className="flex h-[8%] w-full items-center justify-between bg-black px-4 py-2">
      {isEmptyObject(selectedSong) ? (
        <MusicInfo title="Song Title" artist="Artist Name" imgUrl="" />
      ) : (
        <MusicInfo
          title={selectedSong.name}
          imgUrl={selectedSong.album.images[0].url}
          artist={selectedSong.artists[0].name}
        />
      )}
      <PlaybackControl />
      <OtherControls />
    </div>
  );
};

export default MediaPlayer;
