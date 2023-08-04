import Header from "../Components/Content/Header";
import Categories from "../Components/Content/Categories";

const Home = () => {
  return (
    <div className="flex h-full w-full basis-full flex-col gap-4 justify-self-start overflow-hidden rounded-lg bg-primaryBlack p-4 md:basis-3/4">
      <Header />
      <Categories />
    </div>
  );
};

export default Home;
