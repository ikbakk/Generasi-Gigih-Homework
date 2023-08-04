import { TiHome } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import Searchbar from "./Searchbar";
import { useEffect, useRef, useState } from "react";

const Top = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggleSearchbar = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      ref={containerRef}
      className="rounded-lg bg-primaryBlack p-4 text-primaryWhite"
    >
      <div className="flex  items-center gap-4 duration-300 hover:cursor-pointer hover:text-white">
        <div className="my-1 text-3xl">
          <TiHome />
        </div>
        <h1 className="my-1 font-semibold">Home</h1>
      </div>
      <div
        onClick={handleToggleSearchbar}
        className="flex items-center gap-4 duration-300 hover:cursor-pointer hover:text-white"
      >
        <div className="my-1 text-3xl">
          <AiOutlineSearch />
        </div>
        <h1 className="my-1 font-semibold">Search</h1>
      </div>
      {isActive && <Searchbar />}
    </div>
  );
};

export default Top;
