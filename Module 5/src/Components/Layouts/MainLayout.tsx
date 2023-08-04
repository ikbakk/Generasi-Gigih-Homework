import { Outlet } from "react-router-dom";
import {
  LoginContextProvider,
  OutletContextProvider,
  SongContextProvider,
} from "../ContextProviders";

import Sidebar from "../Sidebar";
import MediaPlayer from "../MediaPlayer";

const MainLayout = () => {
  return (
    <LoginContextProvider>
      <SongContextProvider>
        <div className="flex h-screen w-full flex-col overflow-hidden bg-black px-2 pt-2">
          <div className="flex h-[92%] w-full gap-2">
            <Sidebar />
            <OutletContextProvider>
              <Outlet />
            </OutletContextProvider>
          </div>
          <MediaPlayer />
        </div>
      </SongContextProvider>
    </LoginContextProvider>
  );
};

export default MainLayout;
