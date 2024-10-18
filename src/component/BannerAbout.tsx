import imgAbout from '../assets/shannon-nickerson-Qc2ePRQhV5c-unsplashde2.png'
import React from 'react';

const BannerAbout: React.FC = () => {
    return(
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-36 mb-32'>
                <div className='-z-50'>
                    <img className='' src={imgAbout} alt=""/>
                </div>
                <div className='m-0 lg:text-left lg:m-auto mt-8'>
                    <h1 className='darkText text-4xl md:text-6xl text-center'><b>Who is Veg?</b></h1>
                    <p className='text-lg pt-8 text-center mx-8 md:mx-20 lg:mx-20 xl:mx-40'>
                        It is a service based on Spooncular Bees, which provide thousands
                        of vegetarian recipes. The site created in React and Typescript
                        allows users to search for recipes and save them as favorites. 
                    </p>
                    <a href="https://spoonacular.com/food-api" target="_blank">
                        <div className='mt-10 text-center'>
                            <button className='w-[200px] h-[60px] bgDark text-white rounded-tl-[15px] rounded-tr-[15px] rounded-br-[0px] rounded-bl-[15px] shadow-3xl'>Spponcular Api</button>
                        </div>
                    </a>
                </div>
                
            </div>
        </>
    )
}

export default BannerAbout