import { memo } from "react";
import Bottom from "./Bottom";
import Top from "./Top";

const Sidebar = () => {
  const MemoizedBottom = memo(Bottom);

  return (
    <div className="hidden basis-1/4 flex-col gap-2 overflow-hidden rounded-md md:flex">
      <Top />
      <MemoizedBottom />
    </div>
  );
};

export default Sidebar;
