interface HeaderProps {
  title: string;
  onClick: () => void;
}

const Header = ({ title, onClick }: HeaderProps) => {
  return (
    <div className="flex select-none items-center justify-between">
      <h2 className="text-2xl font-bold tracking-wide text-white">{title}</h2>
      <h2
        onClick={onClick}
        className="font-bold text-primaryWhite/40 duration-100 hover:cursor-pointer hover:text-primaryWhite active:scale-95"
      >
        See more
      </h2>
    </div>
  );
};

export default Header;
