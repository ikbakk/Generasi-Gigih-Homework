import { useContext } from "react";
import PlaylistListItem from "./PlaylistListItem";
import { BottomSidebarContext } from "../../../Context/BottomSidebarContext";

const PlaylistList = () => {
  const { selectedCategoryItems } = useContext(BottomSidebarContext);

  return (
    <div className="no-scrollbar outlineoutline-white flex h-full flex-col gap-1 overflow-y-auto ">
      {selectedCategoryItems &&
        selectedCategoryItems.map((item) => {
          return (
            <PlaylistListItem
              key={item.id}
              imgUrl={item.images[0]?.url}
              title={item.name}
              description={item.description!}
            />
          );
        })}
    </div>
  );
};

export default PlaylistList;
