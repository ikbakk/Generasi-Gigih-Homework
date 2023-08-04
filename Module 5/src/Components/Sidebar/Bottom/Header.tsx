import { BsCollection, BsPlus } from "react-icons/bs";
import ContentTab from "./Tabs";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="mx-2 flex items-center justify-between text-primaryWhite">
        <button className="flex items-center gap-2  duration-300 hover:text-white">
          <BsCollection className="text-2xl" />
          <h2 className="font-semibold">Your Library</h2>
        </button>
        <button className="rounded-lg duration-300 hover:bg-secondaryBlack hover:text-white">
          <BsPlus className="text-2xl" />
        </button>
      </div>
      <ContentTab />
    </div>
  );
};

export default Header;
