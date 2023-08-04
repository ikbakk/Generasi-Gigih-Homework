import { Track } from "spotify-types";
import { useNavigate } from "react-router-dom";

import CategoryItems from "./CategoryItems";
import Header from "./Header";

interface CategoryProps {
  categoryId: string;
  categoryTitle: string;
  categoryItems: Track[];
}

const Category = ({
  categoryId,
  categoryItems,
  categoryTitle,
}: CategoryProps) => {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate(`/${categoryId}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <Header onClick={handleSeeMore} title={categoryTitle} />
      <CategoryItems categoryItems={categoryItems} />
    </div>
  );
};

export default Category;
