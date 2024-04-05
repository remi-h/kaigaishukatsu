"use client"
import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const ListItems = [
    { id: 'c1', label: "名前・連絡先が書いてある" },
    { id: 'c2', label: "Upload your CV." },
    { id: 'c3', label: "Upload your CV." },
    { id: 'c4', label: "" },
    { id: 'c5', label: "" },
    { id: 'c6', label: "" },
    { id: 'c7', label: "" },
    { id: 'c8', label: "" },
    { id: 'c9', label: "" },
    { id: 'c10', label: "" },
    { id: 'c11', label: "" },
    { id: 'c12', label: "" },
    { id: 'c13', label: "" },
];

const CVChecklist = () => (
    <div id="list" className='grid grid-cols-3 auto-cols-fr gap-1 text-lg'>
        {ListItems.map((item: { id: string, label: string }, index: number) => (
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

export default CVChecklist;
