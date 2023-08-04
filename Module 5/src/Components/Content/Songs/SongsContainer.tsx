import SongCard from "./SongCard";
import { Track } from "spotify-types";

interface SongsContainerProps {
  tracks: Track[];
}

const SongsContainer = ({ tracks }: SongsContainerProps) => {
  return (
    <div className="no-scrollbar gap-4 overflow-y-scroll ">
      <div className="grid w-full grid-cols-2 place-content-center place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {tracks.map((track) => (
          <SongCard
            onClick={() => console.log(track)}
            key={track.id}
            imgUrl={track.album.images[0].url}
            name={track.name}
            artist={track.artists[0].name}
          />
        ))}
      </div>
    </div>
  );
};

export default SongsContainer;
