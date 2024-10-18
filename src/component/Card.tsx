import { TiStar } from "react-icons/ti";
import { useState, useEffect } from 'react';
import { ICardProps } from "../interface/Interface";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Card({ id, image, title, BookmarksIsFavorite, removeBookmarks }: ICardProps) {
    const [isFavorite, setIsFavorite] = useState<boolean>(BookmarksIsFavorite);

    useEffect(() => {
        const data = localStorage.getItem('dataCard');
        setIsFavorite(BookmarksIsFavorite);

        if (data) {
            try {
                const parsedData = JSON.parse(data) as { id: string }[];
                if (parsedData.some(item => item.id === String(id))) {
                    setIsFavorite(true);
                }
            } catch (error) {
                console.error("Error parsing localStorage data: ", error);
            }
        }
    }, [id, BookmarksIsFavorite]);

    const addRemoveDataCard = (cardId: string) => {
        const data = localStorage.getItem('dataCard');
        let parsedData: { id: string; image: string; title: string }[] = [];

        if (data) {
            try {
                parsedData = JSON.parse(data);
            } catch (error) {
                console.error("Error parsing localStorage data: ", error);
            }
        }

        if (parsedData.find(item => item.id === cardId)) {
            parsedData = parsedData.filter(item => item.id !== cardId);
            removeBookmarks(cardId);
            setIsFavorite(false);  
            toast.info("Dish removed from bookmarks!", {
                autoClose: 600
              });
        } else {
            parsedData.push({ id, image, title });
            setIsFavorite(true);  
            toast.success("Dish added to bookmarks!", {
                autoClose: 600
              });
        }

        // Aggiorna il localStorage
        localStorage.setItem('dataCard', JSON.stringify(parsedData));

        // Log per verificare cosa viene salvato
        console.log('TEST DATA ==', JSON.stringify(parsedData));
    };

    return (
        <>
            <div className="sm:w-[500px] md:w-[300px] xl:w-[300px] 2xl:w-[350px] w-full">
                <div className='mx-[4.2rem] my-[3rem] sm:mx-[6rem] sm:my-[3rem] md:mx-[1rem] md:my-[3rem] 2xl:m-9'>
                    <Link rel="stylesheet" to={`/details/${id}`} >
                        <div className="relative flex justify-items-center flex-col rounded-3xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative flex justify-items-center min-[350px]:mx-4 min-[543px]:mx-16 sm:mx-5 -mt-8 overflow-hidden object-center rounded-full bg-blue-gray-500 bg-clip-border text-white ">
                                <img
                                    src={image}
                                    alt="img-blur-shadow"
                                />
                            </div>
                            <div className="p-6">
                                <h5 className="mb-10 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {title}
                                </h5>
                            </div>
                        </div>
                    </Link>
                    <div className="relative flex -mt-8 justify-end mr-5 h-[65px] w-[20px] pl-[240px]">
                        <button
                            className=' bg-[#13181B] rounded-tl-[21px] rounded-tr-[10px] rounded-br-[50px] rounded-bl-[21px] flex justify-center items-center focus:outline-none focus:ring-0'
                            onClick={() => { addRemoveDataCard(id) }}
                        >
                            <TiStar color={isFavorite ? "yellow" : "white"} size={13}/>
                            
                        </button>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Card;
