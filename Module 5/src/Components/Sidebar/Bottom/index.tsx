import { BottomSidebarContextProvider } from "../../../Context/BottomSidebarContext";
import Header from "./Header";
import PlaylistList from "./PlaylistList";

const Bottom = () => {
  return (
    <BottomSidebarContextProvider>
      <div className="flex h-full flex-col gap-4 overflow-hidden rounded-lg bg-primaryBlack px-2 py-4 ">
        <Header />
        <PlaylistList />
      </div>
    </BottomSidebarContextProvider>
  );
};

export default Bottom;
