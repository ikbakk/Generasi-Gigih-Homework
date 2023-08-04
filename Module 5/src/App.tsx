import { SongContextProvider } from "./Context/SongContext";
import { LoginContextProvider } from "./Context/LoginContext";
import Content from "./Components/Content";
import MediaPlayer from "./Components/MediaPlayer";
import Sidebar from "./Components/Sidebar";

const ContentLayout = () => (
  <div className="flex h-[92%] w-full gap-2">
    <Sidebar />
    <Content />
  </div>
);

function App() {
  return (
    <LoginContextProvider>
      <SongContextProvider>
        <div className="flex h-screen w-full flex-col overflow-hidden bg-black px-2 pt-2">
          {/* <ContentLayout />
          <MediaPlayer /> */}
        </div>
      </SongContextProvider>
    </LoginContextProvider>
  );
}

export default App;
