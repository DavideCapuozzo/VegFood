import { useState, ReactElement } from 'react';
import { TabsProps, TabProps } from "../interface/Interface"; // Assicurati che questi siano definiti correttamente
import React from 'react';

const Tabs = ({ children }: TabsProps) => {
    // Controlla se ci sono children e assegna un valore predefinito
    const initialActiveTab = React.Children.count(children) > 0 ? (children as ReactElement[])[0].props.label : "";
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="max-w-full mx-auto bg-white">
            <div className="flex border-gray-300 bg-[#F8F8F8] h-20">
                {React.Children.map(children, (child) => {
                    // Verifica che child sia un ReactElement
                    if (React.isValidElement(child)) {
                        return (
                            <button
                                key={child.props.label}
                                className={`${activeTab === child.props.label ? 'underline underline-offset-1' : ''} flex-1 py-2 hover:outline-none hover:border-[#F8F8F8] focus:outline-none focus:border-none hover:text-slate-950`}
                                onClick={(e) => handleClick(e, child.props.label)}
                            >
                                {child.props.label}
                            </button>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="pt-8 pb-28 px-5 lg:px-36 xl:px-64 my-auto min-h-[500px]">
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab = ({ children }: TabProps) => {
    return (
        <div className="hidden">
            {children}
        </div>
    );
};

export { Tabs, Tab };
