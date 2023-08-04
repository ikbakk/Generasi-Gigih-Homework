import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { OutletContext } from "../../Context";

import Header from "../Content/Header";
import Songs from "../Content/Songs";

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  const { searchedSongs, setSearchQuery } = useContext(OutletContext);

  useEffect(() => {
    setSearchQuery(searchQuery);
  }, [searchQuery]);

  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Songs title="Search Results" tracks={searchedSongs} />
    </div>
  );
};

export default SearchPage;
