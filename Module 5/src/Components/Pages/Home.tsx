import Header from "../Content/Header";
import Categories from "../Content/Categories";

const Home = () => {
  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Categories />
    </div>
  );
};

export default Home;
