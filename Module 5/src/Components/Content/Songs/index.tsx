import { useContext } from "react";
import SongsContainer from "./SongsContainer";
import { SongContext } from "../../../Context/SongContext";

const Songs = () => {
  const { isSearching } = useContext(SongContext);
  const title = isSearching ? "Search Results" : "Recommended Songs";
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      <SongsContainer />
    </div>
  );
};

export default Songs;
