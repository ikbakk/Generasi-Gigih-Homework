interface MusicInfoProps {
  imgUrl: string;
  title: string;
  artist: string;
}

const MusicInfo = ({ imgUrl, title, artist }: MusicInfoProps) => {
  return (
    <div className="mr-4 flex h-full w-1/4 items-center gap-2">
      <div className="w-12 overflow-hidden rounded-lg">
        <img className="w-full object-cover" src={imgUrl} alt="" />
      </div>
      <div>
        <h3 className="text-sm text-primaryWhite hover:cursor-pointer hover:text-white hover:underline">
          {title}
        </h3>
        <p className="text-xs text-primaryWhite/80 hover:cursor-pointer hover:underline">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default MusicInfo;
