import Image from 'next/image'; 
import React from 'react'
import { Logo } from '@/public/index';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
const EndPage = () => {
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

        <div className="bg-lowpoly py-24 flex flex-col gap-6 pb-36">
        <div className="flex items-center flex-col space-x-3 text-gray-700">
          <MapPin className="w-12 h-12 text-gray-500 theme-bg text-white rounded-lg" />
          <span className='text-xl'>Plot # 36, Street # 02, Sector G-12, Islamabad</span>
        </div>

        <div className="flex items-center flex-col space-x-3 text-gray-700">
          <Phone className="w-12 h-12 text-gray-500 theme-bg text-white rounded-lg" />
          <span className='text-xl'>0321 8735400</span>
        </div>

        <div className="flex items-center flex-col space-x-3 text-gray-700">
          <Mail className="w-12 h-12 text-gray-500 theme-bg text-white rounded-lg" />
          <span className='text-xl'>alhudawoodworks@gmail.com</span>
        </div>

        <div className="flex items-center flex-col space-x-3 text-gray-700">
          <Globe className="w-12 h-12 text-gray-500 theme-bg text-white rounded-lg" />
          <span className='text-xl'>www.alhudaworks.com</span>
        </div>
        </div>
      
    </div>
  )
}

export default EndPage;
