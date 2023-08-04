import ControlButton from "./ControlButton";
import Seekbar from "./Seekbar";

interface PlaybackControlProps {}

const PlaybackControl = ({}: PlaybackControlProps) => {
  return (
    <div className="flex h-full w-1/2 flex-col items-center">
      <ControlButton />
      <Seekbar />
    </div>
  );
};

export default PlaybackControl;
