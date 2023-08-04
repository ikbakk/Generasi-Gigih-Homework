import Categories from "./Categories";
import Header from "./Header";

interface ContentProps {}

const Content = ({}: ContentProps) => {
  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      {/* <Categories /> */}
    </div>
  );
};

export default Content;
