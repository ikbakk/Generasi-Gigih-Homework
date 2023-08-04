import { BsFillVolumeUpFill } from "react-icons/bs";
import { BiSolidPlaylist } from "react-icons/bi";
import { PiMicrophoneStageLight } from "react-icons/pi";
import { HiOutlineQueueList } from "react-icons/hi2";

interface ButtonProps {
  icon: React.ReactNode;
}

const Button = ({ icon }: ButtonProps) => {
  return <button className="p-1 hover:text-white">{icon}</button>;
};

const OtherControls = () => {
  const buttons = [
    {
      id: "playlistBtn",
      icon: <BiSolidPlaylist />,
    },
    {
      id: "queue",
      icon: <HiOutlineQueueList />,
    },
    {
      id: "lyrics",
      icon: <PiMicrophoneStageLight />,
    },
    {
      id: "volumeBtn",
      icon: <BsFillVolumeUpFill />,
    },
  ];

  return (
    <div className="ml-4 flex h-full w-1/4 flex-col items-center md:flex-row md:gap-2">
      <div className="flex basis-1/2 items-center text-2xl text-primaryWhite md:basis-3/4 md:justify-end">
        {buttons.map(({ id, icon }) => {
          return <Button key={id} icon={icon} />;
        })}
      </div>
      <input
        className="w-full"
        readOnly
        type="range"
        value={100}
        min={0}
        max={100}
      />
    </div>
  );
};

export default OtherControls;
