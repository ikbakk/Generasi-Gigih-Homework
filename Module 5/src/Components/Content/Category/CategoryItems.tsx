import CategoryItemsCard from "./CategoryItemsCard";

interface ICategoryItems {
  id: string;
  name: string;
  url: string;
  description: string;
}

interface CategoriesProps {
  categoryItems: ICategoryItems[];
}

const CategoryItems = ({ categoryItems }: CategoriesProps) => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {categoryItems.map((item) => (
        <CategoryItemsCard
          key={item.id}
          title={item.name}
          imgUrl={item.url}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CategoryItems;
