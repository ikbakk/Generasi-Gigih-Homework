import { Track } from "spotify-types";
import Header from "../Components/Content/Header";
import Songs from "../Components/Content/Songs";
import useFetchRecommendedSongs from "../Hooks/useFetchRecommendedSongs";

const RecommendedSongs = () => {
  const { recommendedSongs } = useFetchRecommendedSongs();

  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Songs title="Recommended Songs" tracks={recommendedSongs as Track[]} />
    </div>
  );
};

export default RecommendedSongs;
