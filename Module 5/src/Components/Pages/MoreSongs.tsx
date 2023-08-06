import { useContext } from "react";
import { OutletContext } from "../../Context";
import { useParams } from "react-router-dom";

import Header from "../Content/Header";
import Songs from "../Content/Songs";

const MoreSongs = () => {
  const params = useParams();
  const { categoryEntries } = useContext(OutletContext);
  const foundCategory = categoryEntries.find(
    (entries) => entries.id === params.playlistId,
  )!;

  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Songs title={foundCategory.name} tracks={foundCategory.moreItems} />
    </div>
  );
};

export default MoreSongs;
