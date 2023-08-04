import { useContext } from "react";
import Category from "./Category";
import { OutletContext } from "../../Context/OutletContext";

const Categories = () => {
  const { categoryEntries } = useContext(OutletContext);
  return (
    <div className="flex h-full flex-col gap-4 overflow-auto">
      {categoryEntries.map((category) => (
        <Category
          key={category.id}
          categoryTitle={category.name}
          categoryItems={category.items}
        />
      ))}
    </div>
  );
};

export default Categories;
