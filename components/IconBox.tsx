import React from 'react';
import Link from 'next/link';

type IconBoxProps = {
    icon: string;
    title: string;
    description: string;
};

type IconBoxRichProps = {
    icon: string;
    title: string;
    description: string;
    children: React.ReactNode;
};

const IconBox = ({ icon, title, description }: IconBoxProps) => {
    return (
        <div className="box flex-1 hover:bg-box-hover duration-100 min-h-10">
            <div className="bg-icon inline-block text-4xl w-16 h-16 flex justify-center items-center rounded-md">
                <span>{icon}</span>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

const IconBoxRich = ({ icon, title, description, children }: IconBoxRichProps) => {
    return (
        <div className="box flex-1">
            <div className="bg-icon inline-block text-4xl w-16 h-16 flex justify-center items-center rounded-md">
                <span>{icon}</span>
            </div>
            <h2>{title}</h2>
            <div className='flex flex-col gap-1 mt-2'>
                <p>{description}</p>
                <div className='flex flex-col gap-2'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export { IconBox, IconBoxRich };