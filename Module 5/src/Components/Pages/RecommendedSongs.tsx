import { Track } from "spotify-types";
import { useContext } from "react";
import { OutletContext } from "../../Context";

import Header from "../Content/Header";
import Songs from "../Content/Songs";

const RecommendedSongs = () => {
  const { recommendedSongs } = useContext(OutletContext);

  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Songs title="Recommended Songs" tracks={recommendedSongs as Track[]} />
    </div>
  );
};

export default RecommendedSongs;
