interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-wide text-white">{title}</h2>
    </div>
  );
};

export default Header;
