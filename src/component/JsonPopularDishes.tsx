import Card from "./Card";
import { IBookmark } from "../interface/Interface";
import { PopularDishesData } from "../interface/Interface"

function JsonPopularDishes(){

    const removeBookmarks = (id: string) => {
        const data = localStorage.getItem('dataCard');
        const parsedData: IBookmark[] = data ? JSON.parse(data) : [];
        if (parsedData.find(item => item.id === id)) {
            const parsedDataBookmarks = parsedData.filter(item => item.id !== id);
            localStorage.setItem('dataCard', JSON.stringify(parsedDataBookmarks));
        }
    }

    const dataPopularDishes: PopularDishesData = {
        "results": [
            {
                "id": 635055,
                "title": "Black Bean and Cheese Stuffed Bell Peppers",
                "image": "https://img.spoonacular.com/recipes/635055-312x231.jpg",
                "imageType": "jpg",
                "BookmarksIsFavorite":false
            },
            {
                "id": 665831,
                "title": "fennel, Peppers, Lettuce Salad",
                "image": "https://img.spoonacular.com/recipes/665831-312x231.jpg",
                "imageType": "jpg",
                "BookmarksIsFavorite":false
            },
            {
                "id": 661925,
                "title": "Strawberry-Mango Quinoa Salad",
                "image": "https://img.spoonacular.com/recipes/661925-312x231.jpg",
                "imageType": "jpg",
                "BookmarksIsFavorite":false
            },
            {
                "id": 652423,
                "title": "Moroccan Couscous and Chickpea Salad",
                "image": "https://img.spoonacular.com/recipes/652423-312x231.jpg",
                "imageType": "jpg",
                "BookmarksIsFavorite":false
            },

        ]
    }

    return(
        <>
            {dataPopularDishes.results.map((dish) => (
                <Card
                    key={dish.id} // Usa l'id come chiave se è univoco
                    id={String(dish.id)}
                    title={dish.title}
                    image={dish.image}
                    BookmarksIsFavorite={false}
                    removeBookmarks={removeBookmarks}
                />
            ))}
        </>
    )
}

export default JsonPopularDishes
