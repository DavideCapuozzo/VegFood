/* https://www.devwares.com/blog/how-to-create-react-tabs-with-tailwind-css/ */
import { useState } from 'react';

const Tabs = ({ children }) => {
    
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
            <div className="max-w-full mx-auto bg-white">
                <div className="flex border-gray-300 bg-[#F8F8F8] h-20">
                    {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${ activeTab === child.props.label ? 'underline underline-offset-1' : ''} flex-1 py-2 hover:outline-none hover:border-[#F8F8F8] focus:outline-none focus:border-none hover:text-slate-950`}
                        onClick={e => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                    ))}
                </div>
                <div className="pt-8 pb-28 px-5 lg:px-36 xl:px-64 my-auto min-h-[500px]">
                    {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                    })}
                </div>
            </div>
        );
};

const Tab = ({ label, children }) => {
    return (
        <div label={label} className="hidden">
            {children}
        </div>
    );
};

export { Tabs, Tab };