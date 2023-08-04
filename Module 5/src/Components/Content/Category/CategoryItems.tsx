import CategoryItemsCard from "./CategoryItemsCard";
import { Track } from "spotify-types";

interface CategoriesProps {
  categoryItems: Track[];
}

const CategoryItems = ({ categoryItems }: CategoriesProps) => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {categoryItems.map((category) => (
        <CategoryItemsCard
          key={category.id}
          title={category.name}
          imgUrl={category.album.images[0].url}
          description={category.artists[0].name}
        />
      ))}
    </div>
  );
};

export default CategoryItems;
