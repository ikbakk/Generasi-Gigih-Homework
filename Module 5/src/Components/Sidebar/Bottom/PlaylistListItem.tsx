interface PlaylistListItemProps {
  imgUrl: string;
  title: string;
  description: string;
}

const PlaylistListItem = ({
  imgUrl,
  title,
  description,
}: PlaylistListItemProps) => {
  return (
    <div className="group flex items-center gap-2 rounded-lg p-2  duration-150 hover:cursor-pointer hover:bg-secondaryBlack ">
      <div className="h-16 w-16 overflow-hidden rounded-lg">
        <img className="h-full w-full object-cover" src={imgUrl} alt="" />
      </div>
      <div className="flex w-full flex-col">
        <h3 className="w-full truncate text-base font-semibold text-primaryWhite duration-150 group-hover:text-white">
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
