interface TabItemProps {
  title: string;
  selected: boolean;
  onClick: () => void;
}

const TabItem = ({ title, onClick, selected }: TabItemProps) => {
  const selectedClassName = selected
    ? "bg-black/80 text-white"
    : "bg-black/40 text-primaryWhite";

  return (
    <button
      onClick={onClick}
      className={`${selectedClassName} shrink-0 rounded-xl px-3 py-1 text-sm font-semibold capitalize `}
    >
      {title}
    </button>
  );
};

export default TabItem;
