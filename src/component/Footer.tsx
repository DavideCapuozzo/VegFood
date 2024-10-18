import logoWhite from '../assets/logo-png-500-white.png';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react';


const Footer: React.FC = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center bgDark sm:justify-between' id='footer'>
            <p className='text-white p-3'>info@veg.com</p>
            <Link to={"/"}>
                <div className='w-32 p-3'>
                    <img className='' src={logoWhite} alt="Logo Veg" />
                </div>
            </Link>
            <div className='flex p-3'>
                <FaFacebookF color="white" fontSize="1.6rem" />
                <FaInstagram color="white" fontSize="1.8rem" />
            </div>
        </div>
    );
}

export default Footer;
