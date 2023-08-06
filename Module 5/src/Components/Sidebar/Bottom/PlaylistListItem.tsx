interface PlaylistListItemProps {
  imgUrl: string;
  title: string;
  description: string;
  onClick: () => void;
}

const PlaylistListItem = ({
  imgUrl,
  title,
  description,
  onClick,
}: PlaylistListItemProps) => {
  return (
    <div
      onClick={onClick}
      className="group flex w-full items-center justify-between gap-2 rounded-lg p-2  duration-150 hover:cursor-pointer hover:bg-secondaryBlack "
    >
      <div className="h-12 w-16 overflow-hidden rounded-md">
        <img className="h-full object-cover" src={imgUrl} alt="" />
      </div>
      <div className="flex w-full flex-col">
        <h3 className="line-clamp-1 w-full text-base font-semibold text-primaryWhite duration-150 group-hover:text-white">
          {title}
        </h3>
        <p className="line-clamp-2 text-xs text-primaryWhite/40 duration-150 group-hover:text-primaryWhite">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PlaylistListItem;
