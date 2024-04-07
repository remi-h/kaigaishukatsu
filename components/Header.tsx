import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <div className='border-b-[1px] py-2 border-line'>
            <header className='wrapper'>
                <div className='flex justify-between text-lg font-bold'>
                    <Link href="/" className='text-xl'>海外就活</Link>
                    <div className='flex gap-4'>
                        <Link href="/roadmap">Road Map</Link>
                        <Link href="/cvchecker">CV Checker</Link>
                        <Link href="/community">Community</Link>
                    </div>
                </div>
            </header>
        </div>
    );
}


