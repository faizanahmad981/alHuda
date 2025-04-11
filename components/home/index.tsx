import Image from 'next/image'; 
import React from 'react'
import { wood, wood2, wood3, Logo } from '@/public/index';

const HomeDefault = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-6">

      {/* Logo */}
      <div className="w-full flex justify-center">
        <Image
          src={Logo}
          alt="logo"
          className="w-full max-w-[400px] h-auto object-contain"
        />
      </div>

      {/* Header Bar */}
      <div className="w-full bg-[#3c9b3b] py-4 mt-6 flex justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider text-center">
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
            className="w-[250px] h-auto object-cover rounded-md shadow-md"
          />
          <Image
            src={wood2}
            alt="Office"
            className="w-[250px] h-auto object-cover rounded-md shadow-md"
          />
        </div>

        {/* Right Image (Doors) */}
        <div className="flex items-center justify-center">
          <Image
            src={wood3}
            alt="Door Design"
            className="w-[350px] h-[420px] object-cover rounded-md shadow-md"
          />
        </div>

      </div>
    </div>
  )
}

export default HomeDefault;
