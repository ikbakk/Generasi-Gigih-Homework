import { useState } from "react";
import Category from "./Category";

interface CategoriesProps {}

const Categories = ({}: CategoriesProps) => {
  const [tempData, setTempData] = useState([
    {
      id: 1,
      name: "Category 1",
      items: [
        {
          id: 1,
          name: "Item 1",
          url: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      items: [
        {
          id: 1,
          name: "Item 1",
          url: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      id: 3,
      name: "Category 3",
      items: [
        {
          id: 1,
          name: "Item 1",
          url: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
  ]);
  return (
    <div className="flex h-full flex-col gap-4 overflow-auto">
      {tempData.map((data) => (
        <Category
          key={data.id}
          categoryItems={data.items}
          categoryTitle={data.name}
        />
      ))}
    </div>
  );
};

export default Categories;
