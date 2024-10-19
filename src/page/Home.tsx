import BannerAbout from "../component/BannerAbout";
import BannerHomeSearch from "../component/BannerHomeSearch";
import Footer from "../component/Footer";
import Menu from "../component/Menu";
import React from "react";
import JsonPopularDishes from "../component/JsonPopularDishes";


const Home: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <Menu></Menu>
      </div>

      <BannerHomeSearch></BannerHomeSearch>

      {/* <div className="grid grid-cols-2 my-24 px-8 sm:px-32">
        <div className="flex text-center">
          <h2 className="text-3xl font-extrabold text-center">Recipes of the Week</h2>
        </div>

        <div className="flex justify-end">
            <img src="../src/assets/recipe_15912015.png" alt="" height={50} width={50}/>
            <div className="h-10 w-10 bgDark rounded-full mr-2"></div>
            <div className="h-10 w-10 bgDark rounded-full"></div> 
        </div> 
      </div> */}

      <div className="my-24 px-8 sm:px-32">
        <div className="text-center">
            <h2 className="text-4xl md:text-4xl text-center">Recipes of the Week</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 px-6 lg:px-52 justify-items-center">
        <JsonPopularDishes></JsonPopularDishes>
      </div>

      <BannerAbout></BannerAbout>

      <Footer></Footer>
    </>
  );
};

export default Home;
