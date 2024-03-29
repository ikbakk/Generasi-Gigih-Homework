import { createContext, useEffect, useState } from "react";
import {
  Category,
  ContextProviderProps,
  ContextValue,
} from "./BottomSidebarContextType";
import useFeaturedPlaylist from "../Hooks/useFetchFeaturedPlaylists";
import { Playlist } from "spotify-types";
import useFetchUserPlaylists from "../Hooks/useFetchUserPlaylist";

const BottomSidebarContext = createContext<ContextValue>({} as ContextValue);

const BottomSidebarContextProvider = ({ children }: ContextProviderProps) => {
  const categoriesArray = [
    {
      id: "recommended",
      name: "recommended",
      items: [] as Playlist[],
    },
    {
      id: "myplaylist",
      name: "my playlist",
      items: [] as Playlist[],
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("recommended");
  const [selectedCategoryItems, setSelectedCategoryItems] = useState<
    Playlist[]
  >([]);
  const [categories, setCategories] = useState<Category[]>(categoriesArray);
  const { featuredPlaylist } = useFeaturedPlaylist();
  const { userPlaylists } = useFetchUserPlaylists();

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
      } else if (category.id === "myplaylist") {
        return {
          ...category,
          items: userPlaylists,
        };
      }
      return category;
    });

    setCategories(updatedRecommendedCategory);
  }, [featuredPlaylist, userPlaylists]);

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
