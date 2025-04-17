import React from 'react'; 
import Image from 'next/image';
import { Logo, wood4 } from '@/public/index';

const Doors = () => {
  return (
    <div className="w-full bg-lowpoly pb-64 overflow-x-hidden relative">
      
      {/* Company Logo at the top-right */}
      <div className="absolute top-0 right-0 p-4 z-10">
        <Image 
          src={Logo} 
          alt="Company Logo" 
          className="w-[220px] h-auto max-w-full object-contain" 
        />
      </div>

      {/* Wood4 image in the center */}
      <div className="flex items-center justify-center pt-32 pb-8">
        <Image 
          src={wood4} 
          alt="Wood Image" 
          className="max-w-full h-auto object-contain" 
        />
      </div>

      {/* Heading */}
      <h1 className="theme-bg text-white text-4xl md:text-6xl font-bold px-4 py-4 w-full text-center">
        SOLID/ENGINEERING DOORS
      </h1>

      {/* Description */}
      <div className="bg-lowpoly px-4 text-lg md:text-2xl flex py-12">
        <p className="mx-auto max-w-4xl text-center leading-relaxed">
          Made from 100% solid wood, these doors are durable, long-lasting, and perfect for those seeking a classic,
          timeless look. Ideal for main entrances and rooms where strength and elegance are a priority.
        </p>
      </div>
    </div>
  );
};

export default Doors;
