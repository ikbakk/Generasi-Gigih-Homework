import { createContext, useEffect, useState } from "react";
import {
  CategoryItemsType,
  ContextProviderProps,
  ContextValue,
} from "./BottomSidebarContextType";
import useFeaturedPlaylist from "../Hooks/useFetchFeaturedPlaylists";
import { Playlist } from "spotify-types";

const BottomSidebarContext = createContext<ContextValue>({} as ContextValue);

const BottomSidebarContextProvider = ({ children }: ContextProviderProps) => {
  const categoriesArray = [
    {
      id: "recommended",
      name: "recommended",
      items: [] as Playlist[],
    },
    {
      id: "top10",
      name: "top 10",
      items: [],
    },
    {
      id: "myplaylist",
      name: "my playlist",
      items: [],
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("recommended");
  const [selectedCategoryItems, setSelectedCategoryItems] =
    useState<CategoryItemsType>([]);
  const [categories, setCategories] = useState(categoriesArray);
  const { featuredPlaylist } = useFeaturedPlaylist();

  useEffect(() => {
    if (categories) {
      const foundCategory = categories.find(
        (category) => category.id === selectedCategory,
      );
      if (foundCategory) {
        setSelectedCategoryItems(foundCategory.items);
      }
    }
  }, [categories, selectedCategory]);

  useEffect(() => {
    const updatedRecommendedCategory = categories.map((category) => {
      if (category.id === "recommended") {
        return {
          ...category,
          items: featuredPlaylist,
        };
      }
      return category;
    });

    setCategories(updatedRecommendedCategory);
  }, [featuredPlaylist]);

  const contextValue = {
    selectedCategoryItems,
    selectedCategory,
    categories,
    setSelectedCategoryItems,
    setSelectedCategory,
    setCategories,
  };
  return (
    <BottomSidebarContext.Provider value={contextValue}>
      {children}
    </BottomSidebarContext.Provider>
  );
};

export { BottomSidebarContext, BottomSidebarContextProvider };
