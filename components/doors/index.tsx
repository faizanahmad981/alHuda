import React from 'react';
import Image from 'next/image';
import { Logo, wood4 } from '@/public/index';

const Doors = () => {
  return (
    <div className="w-full bg-lowpoly pb-64">
      {/* Company Logo at the top-right */}
      <div className="w-100 bg-gray-200 absolute right-0">
        <Image src={Logo} alt="Company Logo" className='' />
      </div>

      {/* Wood3 image in the center */}
      <div className="flex items-center justify-center pb-8 bg-gray-200 bg-opacity-0 pt-32">
        <Image src={wood4} alt="Wood Image" className='bg-gray-300' />
      </div>

      {/* Heading with theme-bg */}
      <h1 className="theme-bg text-white text-6xl font-bold px-4 py-4 w-full text-center">
        SOLID/ENGINEERING DOORS
      </h1>
      <div className="bg-lowpoly text-2xl flex py-12">
        <p className='mx-auto'>Designed for precision and performance, these doors are crafted using advanced <br /> engineering techniques. Perfect for modern homes and offices, offering enhanced <br /> security, soundproofing, and fire resistance.</p>
      </div>
    </div>
  );
};

export default Doors;