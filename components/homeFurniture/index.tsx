import React from 'react';
import Image from 'next/image';
import { homeFurniture } from '@/public/index';

const HomeFurniture
 = () => {
    return (
        <div className="w-full bg-lowpoly pb-64">
            {/* Wood3 image in the center */}
            <div className="w-full">
                {/* <p className='absolute text-white flex mx-auto top-10'>Elegance Meets Functionality!</p> */}
                <Image src={homeFurniture} alt="Wood Image" className='w-full' />

            </div>

            {/* Heading with theme-bg */}
            <h1 className="theme-bg text-white text-6xl font-bold px-4 py-4 w-full text-center">
                HOME FURNITURE
            </h1>
            <div className="bg-lowpoly text-2xl flex py-12">
                <p className='mx-auto'>Our custom carpentry expertise brings you exquisite HomeFurniture
                     furniture that elevates <br /> your workspace. From sleek desks to sophisticated storage solutions, we craft  <br /> pieces that combine style, comfort, and durability.
                </p>
            </div>
        </div>
    );
};

export default HomeFurniture
;