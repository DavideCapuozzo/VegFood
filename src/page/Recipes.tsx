import Card from "../component/Card";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Menu from "../component/Menu";
import BannerHomeSearch from "../component/BannerHomeSearch";
import { IBookmark, IRootState } from "../interface/Interface";
import { ToastContainer } from 'react-toastify';
import Footer from "../component/Footer";

function Recipes() {
  const dataRecipes = useSelector((state: IRootState) => state.api.value);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false); 
  const recipesDivRef = useRef<HTMLDivElement | null>(null);
  const noResultsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dataRecipes && dataRecipes.length > 0) {
      recipesDivRef.current?.scrollIntoView({ behavior: "smooth" });
      setShowNoResultsMessage(false); 
    } else if (noResultsRef.current) {
      noResultsRef.current.scrollIntoView({ behavior: "smooth" });
      setShowNoResultsMessage(true); 
    }
  }, [dataRecipes]);

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
      <ToastContainer />
      <Menu />
      <BannerHomeSearch />

      
      <div ref={recipesDivRef}></div>

      {dataRecipes && dataRecipes.length > 0 ? (
        <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 px-6 lg:px-52 justify-items-center">
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
      ) : (
        <div ref={noResultsRef} className="text-center p-40">
          {showNoResultsMessage && ( 
            <>
              <h2>No recipes available with this search key</h2>
              <p>Please try another search term.</p>
            </>
          )}
        </div>
      )}

      <Footer />
    </>
  );
}

export default Recipes;
