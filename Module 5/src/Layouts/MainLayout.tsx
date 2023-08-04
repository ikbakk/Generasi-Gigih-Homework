import { SongContextProvider } from "../Context/SongContext";
import { LoginContextProvider } from "../Context/LoginContext";
import Sidebar from "../Components/Sidebar";
import MediaPlayer from "../Components/MediaPlayer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <LoginContextProvider>
      <SongContextProvider>
        <div className="flex h-screen w-full flex-col overflow-hidden bg-black px-2 pt-2">
          <div className="flex h-[92%] w-full gap-2">
            <Sidebar />
            {children}
          </div>
          <MediaPlayer />
        </div>
      </SongContextProvider>
    </LoginContextProvider>
  );
};

export default MainLayout;
