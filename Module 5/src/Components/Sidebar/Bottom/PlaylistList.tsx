import { useEffect, useState } from "react";
import PlaylistListItem from "./PlaylistListItem";
import useFetchUserPlaylists from "../../../Hooks/useFetchUserPlaylist";
import { useNavigate } from "react-router-dom";
import { UserPlaylist } from "../../../Types";

const PlaylistList = () => {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState<UserPlaylist[]>([]);
  const { userPlaylists } = useFetchUserPlaylists();

  const handleClick = (id: string) => {
    navigate(`/user/playlist/${id}`);
  };

  useEffect(() => {
    setPlaylists(userPlaylists);
  }, [userPlaylists]);

  return (
    <div className="no-scrollbar outlineoutline-white flex h-full flex-col gap-1 overflow-y-auto ">
      {playlists &&
        playlists.map((item) => {
          return (
            <PlaylistListItem
              key={item.id}
              onClick={() => handleClick(item.id)}
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
