"use client"
import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const ListItemsWhat = [
    { id: 'w1', label: "Name and Contact Information" },
    { id: 'w2', label: "Education" },
    { id: 'w3', label: "Relevant Experience" },
    { id: 'w4', label: "Leadership Experience" },
    { id: 'w5', label: "Skills / Languages" },
    { id: 'w6', label: "Achievements & Awards" },
    { id: 'w7', label: "Projects" },
    { id: 'w8', label: "Volunteer Work" },
    { id: 'w9', label: "Extracurricular Activities" },
];
const ListItemsHow = [
    { id: 'h1', label: "Structure with Bullet Points" },
    { id: 'h2', label: "Start with Strong Action Verbs" },
    { id: 'h3', label: "Quantify Achievements with Numbers" },
    { id: 'h4', label: "Tailor Skills and Experience to Keywords" },
    { id: 'h5', label: "Align Your Skills with the Job Description" },
    { id: 'h6', label: "Proofread Carefully for Errors" },
];

const CVChecklistWhat = () => (
    <div className='grid grid-cols-3 auto-cols-fr gap-1 text-lg'>
        {ListItemsWhat.map((item: { id: string, label: string }, index: number) => (
            <label key={index} htmlFor={item.id} className="flex gap-2 bg-box p-4 inline-flex hover:bg-icon">
                <Checkbox.Root
                    className="flex h-8 w-8 items-center justify-center rounded bg-white outline-none"
                    id={item.id}
                >
                    <Checkbox.Indicator className="flex">
                        <CheckIcon width="22" height="22" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <div className="">
                    {item.label}
                </div>
            </label>
        ))}
    </div>
);

const CVChecklistHow = () => (
    <div className='grid grid-cols-3 auto-cols-fr gap-1 text-lg'>
        {ListItemsHow.map((item: { id: string, label: string }, index: number) => (
            <label key={index} htmlFor={item.id} className="flex gap-2 bg-box p-4 inline-flex hover:bg-icon">
                <Checkbox.Root
                    className="flex h-8 w-8 items-center justify-center rounded bg-white outline-none"
                    id={item.id}
                >
                    <Checkbox.Indicator className="flex">
                        <CheckIcon width="22" height="22" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <div className="">
                    {item.label}
                </div>
            </label>
        ))}
    </div>
);

export { CVChecklistWhat, CVChecklistHow };