import { useContext } from "react";
import { SongContext } from "../../../Context/SongContext";
import SongCard from "./SongCard";

const SongsContainer = () => {
  const { shownTracks } = useContext(SongContext);

  return (
    <div className="no-scrollbar gap-4 overflow-y-scroll ">
      <div className="grid w-full grid-cols-2 place-content-center place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {shownTracks.map((track) => (
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
