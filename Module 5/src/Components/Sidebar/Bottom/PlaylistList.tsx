import { useContext, useEffect } from "react";
import PlaylistListItem from "./PlaylistListItem";
import { BottomSidebarContext } from "../../../Context/BottomSidebarContext";
import { SongContext } from "../../../Context/SongContext";

const PlaylistList = () => {
  const { selectedCategoryItems } = useContext(BottomSidebarContext);
  const { setSelectedPlaylist } = useContext(SongContext);

  useEffect(() => {
    if (selectedCategoryItems.length > 0) {
      setSelectedPlaylist(selectedCategoryItems[0].id);
    }
  }, [selectedCategoryItems]);

  return (
    <div className="no-scrollbar outlineoutline-white flex h-full flex-col gap-1 overflow-y-auto ">
      {selectedCategoryItems &&
        selectedCategoryItems.map((item) => (
          <PlaylistListItem
            key={item.id}
            imgUrl={item.images[0].url}
            title={item.name}
            description={item.description!}
          />
        ))}
    </div>
  );
};

export default PlaylistList;
