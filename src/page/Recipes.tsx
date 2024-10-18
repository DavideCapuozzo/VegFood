import Card from "../component/Card";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import Menu from "../component/Menu";
import BannerHomeSearch from "../component/BannerHomeSearch";
import { IBookmark, IRootState } from "../interface/Interface";
import { ToastContainer } from 'react-toastify';
import Footer from "../component/Footer";

function Recipes() {
  // Tipizziamo useSelector con il tipo RootState
  const dataRecipes = useSelector((state: IRootState) => state.api.value);
  console.log("SONO IN RECIPES", dataRecipes);

  const recipesDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dataRecipes && recipesDivRef.current) {
      recipesDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [dataRecipes]);

  // Tipizziamo removeBookmarks, specificando che l'id è di tipo string (o number)
  const removeBookmarks = (id: string) => {
    const data = localStorage.getItem("dataCard");
    const parsedData: IBookmark[] = data ? JSON.parse(data) : [];
    if (parsedData.find((item) => item.id === id)) {
      const parsedDataBookmarks = parsedData.filter((item) => item.id !== id);
      localStorage.setItem("dataCard", JSON.stringify(parsedDataBookmarks));
    }
  };
  
  return (
    <>
      <ToastContainer ></ToastContainer>
      <Menu />
      <BannerHomeSearch />
      
        {dataRecipes && dataRecipes.length > 0 ?(
          <div ref={recipesDivRef} className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 px-6 lg:px-52 justify-items-center">
            {dataRecipes[0].map((i) => (
                <Card
                  key={i.id}
                  id={String(i.id)}
                  title={i.title}
                  image={i.image}
                  removeBookmarks={removeBookmarks}
                  BookmarksIsFavorite={false}
                />
            ))}
          </div>
          ):(
            <div className="text-center p-40">
              <h2>No recipes available with this search key</h2>
            </div>
            
          )}
      
      <Footer></Footer>
    </>
  );
}

export default Recipes;
