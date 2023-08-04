import CategoryItems from "./CategoryItems";
import Header from "./Header";

interface CategoryProps {
  categoryTitle: string;
  categoryItems: never[];
}

const Category = ({ categoryItems, categoryTitle }: CategoryProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Header title={categoryTitle} />
      <CategoryItems categoryItems={categoryItems} />
    </div>
  );
};

export default Category;
