import { Playlist, Track } from "spotify-types";

export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextValue {
  categories: Category[];
  selectedCategory: string;
  selectedCategoryItems: Category["items"];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategoryItems: React.Dispatch<
    React.SetStateAction<Category["items"]>
  >;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

export interface Category {
  id: string;
  name: string;
  items: Playlist[];
}
