import { Track } from "spotify-types";
import SongsContainer from "./SongsContainer";

interface SongsProps {
  title: string;
  tracks: Track[];
}

const Songs = ({ title, tracks }: SongsProps) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <h2 className="text-2xl font-bold tracking-wide text-white">{title}</h2>
      <SongsContainer tracks={tracks} />
    </div>
  );
};

export default Songs;
