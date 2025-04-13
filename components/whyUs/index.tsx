import React from 'react';
import Image from 'next/image';
import { img1, Logo, icon, icon1, icon2, bottom } from '@/public/index';
import ChooseCard from './chooseCard';

const WhyUs = () => {
    const cards = [
            {
              heading: "Mission",
              para: "First class service and quality products with sense of beauty for everyone satisfaction.",
              image: icon,
            },
            {
              heading: "Vision",
              para: "To be the leading brand in wooden design and innovation through commitment and creativity.",
              image: icon1,
            },
            {
              heading: "Values",
              para: "Integrity, innovation, quality, and customer-centric service are the heart of our work.",
              image: icon2,
            },
          ];
  return (
    <div className="w-full bg-white bg-lowpoly pb-12">

      {/* Top Green Banner */}
      <div className="relative bg-white h-60 overflow-hidden bg-lowpoly">
        {/* Curved Green Shape */}
        <div className="absolute top-0 left-[-60] w-120 h-60 theme-bg rounded-b-full flex items-center justify-center z-10 border-b-1 border-r-6 border-gray-300">
          <h2 className="text-white text-5xl font-semibold uppercase ml-4 mt-4">Why Choose <br /> Us!</h2>
        </div>

        {/* Logo in the top-right */}
        <div className="absolute top-4 right-4">
          <Image src={Logo} alt="Al-Huda Logo" className="w-100 object-contain" />
        </div>
      </div>


      <div className="pt-10 px-6 md:px-20 flex flex-col md:flex-row gap-6  items-center justify-center bg-lowpoly">
        {cards.map((card, index) => (
          <ChooseCard
            key={index}
            heading={card.heading}
            para={card.para}
            image={card.image}
          />
        ))}
      </div>
      <div className="pt-10 px-6 md:px-20 flex flex-col md:flex-row gap-6  items-center justify-center bg-lowpoly">
        {cards.map((card, index) => (
          <ChooseCard
            key={index}
            heading={card.heading}
            para={card.para}
            image={card.image}
          />
        ))}
      </div>
        <div className="image mt-24">
        <Image src={bottom} alt="Al-Huda Logo" className="w-full" />
        </div>
      
    </div>
  );
};

export default WhyUs;
