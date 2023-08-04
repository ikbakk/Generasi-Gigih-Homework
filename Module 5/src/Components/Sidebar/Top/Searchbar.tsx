import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSongs = () => {
    navigate("/search", { state: { searchQuery } });
  };

  return (
    <div className="flex flex-col items-center gap-2">
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
