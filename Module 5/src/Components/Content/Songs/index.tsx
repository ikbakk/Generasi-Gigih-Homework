import { useContext } from "react";
import { SongContext } from "../../../Context/SongContext";

const Songs = () => {
  const { shownTracks } = useContext(SongContext);
  console.log(shownTracks);
  return (
    <div className="grid w-full grid-cols-2 place-content-center place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {/* {songList.map((song) => {
        // console.log(song.artists[0]);
        return (
          <ContentCard
            onClick={() => handleSelectedSong(song)}
            key={song.id}
            imgUrl={song.album.images[0].url}
            title={song.name}
            artist={song.artists[0].name}
          />
        );
      })} */}
    </div>
  );
};

export default Songs;
