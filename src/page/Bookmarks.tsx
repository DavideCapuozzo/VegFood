import Menu from "../component/Menu";
import Card from "../component/Card";
import { useState, useEffect } from 'react';
import { IBookmark } from "../interface/Interface";
import { ToastContainer } from 'react-toastify';
import Footer from "../component/Footer";

function Bookmarks() {
    const [parsedData, setParsedData] = useState<IBookmark[]>([]);

    useEffect(() => {
        const data = localStorage.getItem('dataCard');
        if (data) {
            setParsedData(JSON.parse(data));
        }
    }, []);

    const removeBookmarks = (id: string) => {  
        const updatedData = parsedData.filter(item => item.id !== id); 
        setParsedData(updatedData);
        localStorage.setItem('dataCard', JSON.stringify(updatedData));
    }; 

    return (
        <>
            <ToastContainer></ToastContainer>
            <Menu />
            <div className="mt-24 font-medium text-xl">
                <h1 className="text-3xl md:text-5xl font-bold text-center pb-20">Your Favorite Recipes</h1>
            </div>
            <div>
                {parsedData.length === 0 &&
                    <h2>You don't have any recipes saved as favorites</h2>
                }
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 px-6 lg:px-52 justify-items-center min-h-screen">
                {parsedData.map((i) => (
                    <Card
                        key={i.id}
                        id={i.id}
                        title={i.title}
                        image={i.image}
                        BookmarksIsFavorite={true}
                        removeBookmarks={removeBookmarks}
                    />
                ))}
            </div>
            <Footer></Footer>
        </>
    );
}

export default Bookmarks;
