import Header from "../Components/Content/Header";
import Songs from "../Components/Content/Songs";
import { useLocation } from "react-router-dom";
import useSearchTracks from "../Hooks/useSearchTracks";

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  const { searchResult } = useSearchTracks(searchQuery);

  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Songs title="Search Results" tracks={searchResult} />
    </div>
  );
};

export default SearchPage;
