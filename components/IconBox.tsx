import React from 'react';

type IconBoxProps = {
    icon: string;
    title: string;
    description: string;
};

const IconBox = ({ icon, title, description }: IconBoxProps) => {
    return (
        <div className="box flex-1 hover:opacity-90 duration-100 min-h-10">
            <div className="bg-icon inline-block text-4xl w-16 h-16 flex justify-center items-center rounded-md">
                <span>{icon}</span>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default IconBox;