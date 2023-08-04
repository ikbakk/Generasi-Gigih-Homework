import { useContext } from "react";
import Category from "./Category";
import { OutletContext } from "../../Context";

const Categories = () => {
  const { categoryEntries } = useContext(OutletContext);
  return (
    <div className="no-scrollbar flex h-full flex-col gap-4 overflow-auto">
      {categoryEntries.map((category) => (
        <Category
          key={category.id}
          categoryId={category.id}
          categoryTitle={category.name}
          categoryItems={category.items}
        />
      ))}
    </div>
  );
};

export default Categories;
