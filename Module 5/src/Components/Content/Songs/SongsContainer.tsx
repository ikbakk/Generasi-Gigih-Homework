import { useContext } from "react";
import { Track } from "spotify-types";
import { SongContext } from "../../../Context";

import SongCard from "./SongCard";

interface SongsContainerProps {
  tracks: Track[];
}

const SongsContainer = ({ tracks }: SongsContainerProps) => {
  const { setSelectedSong } = useContext(SongContext);

  const handleClick = (track: Track) => {
    setSelectedSong(track);
  };

  return (
    <div className="no-scrollbar gap-4 overflow-y-scroll ">
      <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {tracks?.map((track) => (
          <SongCard
            onClick={() => handleClick(track)}
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
