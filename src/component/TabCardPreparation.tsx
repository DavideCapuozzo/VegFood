import { TabCardPreparationProps } from "../interface/Interface"

const TabCardPreparation: React.FC<TabCardPreparationProps> = ({ step, number }) => {
    return(
        <>
        
            <div className='m-3 sm:m-6'>
                <div className="relative flex text-gray-700 ">
                    <div className="">
                        <h5 className="mb-3 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Step {number}
                        </h5>
                    </div>
                </div>
                <div className="text-start">
                    <div>
                        <p>{step}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TabCardPreparation