import Categories from "./Categories";
import Header from "./Header";
import Songs from "./Songs";

const Content = () => {
  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Songs />
    </div>
  );
};

export default Content;
