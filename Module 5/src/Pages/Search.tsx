import Header from "../Components/Content/Header";
import Songs from "../Components/Content/Songs";

const SearchPage = () => {
  const tracks: any[] = [];
  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Songs title="Search Results" tracks={tracks} />
    </div>
  );
};

export default SearchPage;
