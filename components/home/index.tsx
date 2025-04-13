import Image from 'next/image'; 
import React from 'react'
import { wood, wood2, wood3, Logo } from '@/public/index';

const HomeDefault = () => {
  return (
    <div className="bg-lowpoly flex flex-col items-center justify-center w-full px-4 pb-6">

      {/* Logo */}
      <div className="w-full flex justify-center">
        <Image
          src={Logo}
          alt="logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Header Bar */}
      <div className="w-full bg-[#3c9b3b] py-4 mt-6 flex justify-center">
        <h1 className="text-white text-4xl md:5xl lg:6xl xl:text-7xl font-bold uppercase tracking-wider text-center">
          Al-Huda Woodworks
        </h1>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center items-start gap-10 mt-12">

        {/* Left Images */}
        <div className="flex flex-col gap-6">
          <Image
            src={wood}
            alt="Kitchen"
            className="w-80 h-auto object-cover border-6 border-gray-300"
          />
          <Image
            src={wood2}
            alt="Office"
            className="w-80 h-auto object-cover border-6 border-gray-300"
          />
        </div>

        {/* Right Image (Doors) */}
        <div className="flex items-center justify-center">
          <Image
            src={wood3}
            alt="Door Design"
            className="w-120 object-cover rounded-md"
          />
        </div>       

      </div>
      <div className="py-8">
      <button className='theme-bg px-12 py-3 rounded-4xl text-white text-xl font-bold'>w w w . a l h u d a w o o d w o r k s . c o m</button>
      </div>
    </div>
  )
}

export default HomeDefault;
