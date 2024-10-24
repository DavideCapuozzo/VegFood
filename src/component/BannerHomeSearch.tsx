import imgBannerSearch from "../assets/jo-sonn-M-tzZD5z720-unsplash2.png";
import { useDispatch } from "react-redux";
import { addSearch, removeSearch } from "../store/apiSlice";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { Recipe } from '../interface/Interface'; // Importa l'interfaccia Recipe

function BannerHomeSearch() {
  const navigateTo = useNavigate();
  const [dataInput, setDataInput] = useState<string>("");

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputSubmit(e); 
    }
  };

  
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleInputSubmit(e); 
  };

  
  const handleInputSubmit = async (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeSearch());

    try {
      const response = await Axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            /* apiKey: 'b444328881b641d2a37625d8ffe1f1a9', */
            apiKey: "908909a3a27a4c31be434239966536b8",
            diet: "vegetarian",
            number: 5000,
          },
        }
      );
      const data: Recipe[] = response.data.results; 
      const filteredResults = data.filter((recipe: Recipe) =>
        recipe.title.toLowerCase().includes(dataInput.toLowerCase())
      );
      if (filteredResults.length > 0) {
        dispatch(addSearch(filteredResults));
        navigateTo("/recipes");
      } else {
        console.log("No recipes available with this search key");
        navigateTo("/recipes");
      }
    } catch (error) {
      console.error("Error request API:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mx-8 justify-center items-center xl:text-left lg:text-left md:text-left  order-2 lg:order-1 sm:px-24 lg:m-auto mt-5">
          <h1 className="darkText text-4xl md:text-6xl items-center justify-center">
            <b>
              Search Thousands<br></br>of Recipes your<br></br> favorite
            </b>
          </h1>
          <div className="mt-10 bg-white mx-auto rounded-3xl h-14 flex items-center justify-center w-full lg:w-auto">
            <button
              className="w-[60px] h-14 bgDark text-white rounded-tl-[15px] rounded-tr-[15px] rounded-br-[0px] rounded-bl-[15px]"
              onClick={handleButtonClick}
            >
              <IoIosSearch />
            </button>
            <div className="flex items-center justify-center h-full text-center w-full">
              <input
                className="w-full text-center focus:outline-none focus:ring-0 bg-[#ffffff]"
                type="text"
                value={dataInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Recipes, Ingredients"
              />
            </div>
          </div>
        </div>
        <div className="mt-[-150px] -z-50 order-1 lg:order-2">
          <img className="" src={imgBannerSearch} alt="" />
        </div>
      </div>
    </>
  );
}

export default BannerHomeSearch;
