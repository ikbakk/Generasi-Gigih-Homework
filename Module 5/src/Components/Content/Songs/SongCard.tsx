interface SongCardProps {
  onClick: () => void;
  imgUrl: string;
  name: string;
  artist: string;
}

const SongCard = ({ artist, imgUrl, name, onClick }: SongCardProps) => {
  return (
    <div
      onClick={onClick}
      className="my-1 flex h-64 w-40 flex-col justify-between rounded-lg bg-secondaryBlack p-3 duration-300 hover:cursor-pointer hover:bg-secondaryBlack/50"
    >
      <div className="w-full basis-3/5 overflow-hidden rounded-lg bg-black/30">
        <img className="h-full w-full object-cover" src={imgUrl} />
      </div>
      <div className="flex h-full basis-2/5 flex-col justify-end">
        <h3 className="line-clamp-2 text-lg font-semibold text-primaryWhite">
          {name}
        </h3>
        <p className="line-clamp-1 text-primaryWhite/50">{artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
