export interface IBookmark {
    id: string;
    title: string;
    image: string;
}

export interface ICardProps {
    id: string;
    image: string;
    title: string;
    BookmarksIsFavorite: boolean;
    removeBookmarks: (id: string) => void; 
}

export interface IRootState {
    api: {
        value: IBookmark[][];
    };
}

export interface Ingredient {
    id: number;
    name: string;
    amount: number;
    unit: string;
}

export interface NutrientsBody {
    name: string;
    amount: number;
    unit: string;
}

export interface Nutrition {
    nutrients: Array<NutrientsBody>;
    ingredients: Ingredient[];
}

export interface Recipe {
    id: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    summary: string;
    image:string;
    nutrition: Nutrition;
    analyzedInstructions: Array<{
        name: string;
        steps: Array<{
            number: number;
            step: string;
        }>;
    }>;
}

export interface TabCardPreparationProps{
    number:number 
    step:string 
}

export interface PopularDishesData{
    results: Array<{
        id: number;
        title: string;
        image: string;
        imageType: string;
        BookmarksIsFavorite:boolean;
    }>;
}