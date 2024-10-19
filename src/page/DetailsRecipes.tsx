import { useParams } from "react-router-dom";
import Menu from "../component/Menu";
import { IoMdTime } from "react-icons/io";
import { Tabs, Tab } from "../component/Tabs";
import Footer from "../component/Footer";
import TabCardPreparation from "../component/TabCardPreparation";
import CheckIngredients from "../component/CheckIngredients";
import { useEffect, useState } from "react";
import axios from "axios";
import { Recipe, IBookmark } from "../interface/Interface";
import { TiStar } from "react-icons/ti";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

function DetailsRecipes() {
  const { detailsID } = useParams<{ detailsID: string }>();
  const [data, setData] = useState<Recipe | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [parsedData, setParsedData] = useState<IBookmark[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("dataCard");

    try {
      if (storedData) {
        const parsedBookmarks: IBookmark[] = JSON.parse(storedData);
        console.log("parsedBookmarks ===", parsedBookmarks);

        setParsedData(parsedBookmarks);

        // Verifica se l'ID attuale è nei segnalibri
        const isFavorited = parsedBookmarks.some(
          (item) => String(item.id) === detailsID
        );
        setIsFavorite(isFavorited);
      } else {
        setIsFavorite(false);
      }
    } catch (error) {
      console.error("Error parsing localStorage data", error);
      setParsedData([]);
    }
  }, [detailsID]);

  const removeBookmark = (id: string) => {
    const updatedData = parsedData.filter((item) => String(item.id) !== id); 
    setParsedData(updatedData);
    localStorage.setItem("dataCard", JSON.stringify(updatedData));
    setIsFavorite(false); 
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeBookmark(detailsID!); 
      toast.info("Dish removed from bookmarks!", {
        autoClose: 600
      });
    } else {
      
      const newBookmark: IBookmark = {
        id: detailsID!,
        image: data?.image || "",
        title: data?.title || "",
      };
      const updatedData = [...parsedData, newBookmark];
      setParsedData(updatedData);
      localStorage.setItem("dataCard", JSON.stringify(updatedData));
      setIsFavorite(true);
      toast.success("Dish added to bookmarks!", {
        autoClose: 600
      });
    }
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${detailsID}/information`,
          {
            params: {
              /* apiKey: 'b444328881b641d2a37625d8ffe1f1a9', */
              apiKey: "908909a3a27a4c31be434239966536b8",
              includeNutrition: true,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching the recipe data", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [detailsID]);

  if (loading) {
    return <p>.... Loading ....</p>;
  }

  if (error || !data) {
    return <p>Error loading product</p>;
  }

  const nutrientNamesToShow = [
    "Calories",
    "Fat",
    "Saturated Fat",
    "Carbohydrates",
    "Sugar",
    "Protein",
  ];
  const relevantNutrients = data.nutrition.nutrients.filter((nutrient) =>
    nutrientNamesToShow.includes(nutrient.name)
  );

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="bg-details bg-no-repeat bg-center">
        <Menu />
        <div className="flex justify-center items-center">
          <div className="flex h-[550px] w-[550px] mx-auto bg-no-repeat bg-center bg-contain rounded-full items-center justify-center">
            <img
              src={data.image || "/path/to/fallback-image.jpg"}
              alt="Recipe"
              className="rounded-full"
            />
            <div className="absolute flex h-16 mt-[330px] ml-[300px] lg:ml-[500px]">
              <button
                className="bg-[#13181B] rounded-tl-[21px] rounded-tr-[10px] rounded-br-[50px] rounded-bl-[21px] flex justify-center items-center focus:outline-none focus:ring-0"
                onClick={toggleFavorite}
              >
                <TiStar color={isFavorite ? "yellow" : "white"} size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-white lg:px-[150px]">
        <h2 className="leading-tight" id="h2Details">{data.title || "Recipe Title"}</h2>
        <p className="pt-5" id="pDetails">
          {data.nutrition.nutrients.find((n) => n.name === "Calories")
            ?.amount || "N/A"}{" "}
          kcal - For {data.servings || "N/A"} people
        </p>
        <div className="flex items-center justify-center mx-auto text-center pt-5 font-bold">
          <IoMdTime fontSize="1.5rem" />
          <p>{data.readyInMinutes || "N/A"} min</p>
        </div>
      </div>

      <div className="h-14 bg-white"></div>

      <div className="">
        <Tabs>
          <Tab label="Description">
            <div className="py-4">
              <h2 className="font-bold mb-8 text-3xl">Description</h2>
              <p className="text-gray-700">
                {data.summary
                  ? data.summary.replace(/<\/?[^>]+(>|$)/g, "")
                  : "N/A"}
              </p>

              <table className="w-full mt-28 border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-3xl lg:p-3">
                      Nutritional Values
                    </th>
                    <th className="text-right text-3xl">For Portion</th>
                  </tr>
                </thead>
                <tbody>
                  {relevantNutrients.map((nutrient, index) => (
                    <tr key={index} className="border-t-[1px]">
                      <td className="text-left py-3 lg:py-3">{nutrient.name}</td>
                      <td className="text-right">
                        {nutrient.amount} {nutrient.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab>

          <Tab label="Ingredients">
            <div className="py-4">
              <h2 className="font-bold mb-8 text-3xl">Ingredients</h2>
              <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:px-32 m-3">
                {data.nutrition.ingredients.map((ingredient) => (
                  <CheckIngredients
                    key={ingredient.id}
                    name={ingredient.name}
                    amount={`${ingredient.amount} ${ingredient.unit}`}
                  />
                ))}
              </div>
            </div>
          </Tab>

          <Tab label="Preparation">
            <h2 className="font-bold mb-8 lg:text-left text-3xl">Preparation</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
              {data.analyzedInstructions?.[0]?.steps?.map((i, index) => (
                <TabCardPreparation
                  key={index}
                  number={i.number}
                  step={i.step}
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}

export default DetailsRecipes;
