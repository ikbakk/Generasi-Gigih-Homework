import { useContext, useEffect, useRef } from "react";
import TabItem from "./TabItem";
import { BottomSidebarContext } from "../../../../Context/BottomSidebarContext";

const ContentTab = () => {
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(BottomSidebarContext);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      const handleScroll = (event: WheelEvent) => {
        if (event.deltaY !== 0) {
          containerElement.scrollBy({
            top: 0,
            left: event.deltaY * 0.3,
            // behavior: "smooth",
          });
        }
      };

      containerElement.addEventListener("wheel", handleScroll);
      return () => {
        containerElement.removeEventListener("wheel", handleScroll);
      };
    }
  }, []);

  const handleSelectedItem = (category: string) => {
    const selectedItem = selectedCategory === category ? true : false;
    return selectedItem;
  };

  const handleClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div
      ref={containerRef}
      className="no-scrollbar flex w-full gap-2 justify-self-start overflow-x-auto rounded-lg bg-primaryBlack px-1 md:basis-3/4"
    >
      {categories.map((category) => (
        <TabItem
          key={category.id}
          title={category.name}
          onClick={() => handleClick(category.id)}
          selected={handleSelectedItem(category.id)}
        />
      ))}
    </div>
  );
};

export default ContentTab;
