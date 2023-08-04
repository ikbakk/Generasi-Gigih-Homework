import { FaRandom } from "react-icons/fa";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
import { useState } from "react";

const ControlButton = () => {
  // const { isSongPlaying, setIsSongPlaying } = useContext(SongContext);
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  const playPauseIcon = isSongPlaying ? (
    <AiFillPauseCircle size={32} />
  ) : (
    <AiFillPlayCircle size={32} />
  );

  const handlePlayButton = () => {
    setIsSongPlaying(!isSongPlaying);
  };

  const buttons = [
    {
      id: "random",
      icon: <FaRandom size={18} />,
      handleClick: () => console.log("click"),
    },
    {
      id: "previous",
      icon: <BiSkipPrevious size={32} />,
      handleClick: () => console.log("click"),
    },
    {
      id: "play",
      icon: playPauseIcon,
      handleClick: handlePlayButton,
    },
    {
      id: "next",
      icon: <BiSkipNext size={32} />,
      handleClick: () => console.log("click"),
    },
    {
      id: "repeat",
      icon: <FiRepeat size={18} />,
      handleClick: () => console.log("click"),
    },
  ];

  return (
    <div className="flex h-1/2 w-3/4 items-center justify-center gap-3">
      {buttons.map(({ id, icon, handleClick }) => {
        return (
          <button
            onClick={handleClick}
            className="text-primaryWhite hover:text-white"
            key={id}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default ControlButton;
