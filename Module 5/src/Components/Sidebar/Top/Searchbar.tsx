import { useContext } from "react";
import { SongContext } from "../../../Context/SongContext";

const Searchbar = () => {
  const { setSearchQuery, handleSearch, setIsSearching } =
    useContext(SongContext);

  const handleSearchSongs = () => {
    setIsSearching(true);
    handleSearch();
  };

  const handlePropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={(e) => handlePropagation(e)}
      className="flex flex-col items-center gap-2"
    >
      <input
        className="w-full rounded-md bg-secondaryBlack px-3 py-1"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        onClick={handleSearchSongs}
        className="w-full rounded-md bg-primaryWhite px-3 py-1 font-semibold text-primaryBlack duration-100 hover:bg-primaryWhite/40 hover:text-white active:scale-95"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
