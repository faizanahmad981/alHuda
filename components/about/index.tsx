import React from 'react';
import Image from 'next/image';
import { img1, Logo } from '@/public/index';

const AboutUsSection = () => {
  return (
    <div className="w-full bg-white bg-lowpoly pb-12 border-b-3 border-[#409a3c]">

      {/* Top Green Banner */}
      <div className="relative bg-white h-60 overflow-hidden bg-lowpoly">
        {/* Curved Green Shape */}
        <div className="absolute top-0 left-[-60] w-120 h-60 theme-bg rounded-b-full flex items-center justify-center z-10 border-b-1 border-r-6 border-gray-300">
          <h2 className="text-white text-5xl font-semibold uppercase ml-4 mt-4">About Us</h2>
        </div>

        {/* Logo in the top-right */}
        <div className="absolute top-4 right-4">
          <Image src={Logo} alt="Al-Huda Logo" className="w-100 object-contain" />
        </div>
      </div>


      {/* Image Card */}
      <div className="w-full flex justify-center mt-12">
        <div className="bg-[gray] shadow-lg border border-gray-200 p-2">
          <Image
            src={img1}
            alt="Furniture"
            className="object-cover rounded-2xl "
          />
        </div>
      </div>

      {/* Green Content Section */}
      <div className="bg-[#409a3c] bg-opacity-60 text-white px-6 md:px-20 py-8 mt-8">
        <p className="mb-4 text-lg">
          <span className="font-bold text-white">Al-Huda Woodworks</span> is a well-established furniture manufacturer in Islamabad.
        </p>
        <p className="mb-4 text-base leading-relaxed">
          We design and build modern and classic furniture to home, office, commercial and industrial living space. We produce customize fitted furniture, of the highest quality and to ensure we meet all of our client’s requirements and even exceed their expectation with customer satisfaction.
        </p>

        <h3 className="text-white font-semibold text-lg mb-2">Core Specialization:</h3>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>Design & Build Solid/Engineering Doors</li>
          <li>Quality Office & Home Furniture</li>
          <li>Modern Kitchen Cabinets & Wardrobes</li>
          <li>Renovation of Modern & Classic Living</li>
          <li>Wall Panels & Flooring</li>
          <li>Customize Furniture & Decorative Items</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsSection;
