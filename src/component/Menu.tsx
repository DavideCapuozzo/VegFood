import logoBlack from '../assets/logo-png-500.png';
import { TiStar } from "react-icons/ti";
import { Link } from 'react-router-dom';
import React from 'react';

const Menu: React.FC = () => {
    return(
            <nav className="font-sans flex text-center content-center sm:flex-row sm:text-left justify-between bg-white bg-opacity-0 sm:items-baseline w-full grid-cols-2 px-8 sm:px-32 py-5">
                <div className="mb-2 sm:mb-0 flex flex-row z-40">
                    <div className="h-[35px] w-[85px] self-center mr-2">
                        <Link to={"/"}>
                            <img className="self-center" src={logoBlack}/>
                        </Link>
                        
                    </div>
                </div>
                <div className="sm:mb-0">
                    <Link to={"/bookmarks"}>
                        <button className='h-[65px] bg-[#13181B] rounded-tl-[21px] rounded-tr-[10px] rounded-br-[50px] rounded-bl-[21px] flex justify-center items-center focus:outline-none focus:ring-0 hover:border-transparent'>
                            <TiStar color="white"/>
                        </button>
                    </Link>
                </div>
            </nav>
    )
}
export default Menu;








