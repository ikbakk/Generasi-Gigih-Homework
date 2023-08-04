import MusicInfo from "./MusicInfo";
import OtherControls from "./OtherControl";
import PlaybackControl from "./PlaybackControl";

interface indexProps {}

const MediaPlayer = ({}: indexProps) => {
  return (
    <div className="flex h-[8%] w-full items-center justify-between bg-black px-4 py-2">
      <MusicInfo title="Title" imgUrl="" artist="Artist" />
      <PlaybackControl />
      <OtherControls />
    </div>
  );
};

export default MediaPlayer;
