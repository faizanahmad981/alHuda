import Image, { StaticImageData } from "next/image";
import React from "react";

interface ChooseCardProps {
  heading: string;
  para: string;
  image: string | StaticImageData;
}

const ChooseCard: React.FC<ChooseCardProps> = ({ heading, para, image }) => {
  return (
    <div className="w-70 h-[500px] bg-gray-300 rounded-tl-[100px] rounded-tr-[20px] px-2 pt-2 relative shadow-md">
      {/* Circular Image */}
      <div className="flex justify-start items-start">
        <div className="w-40 h-40 bg-[#409a3c] rounded-full border-8 border-white flex items-center justify-center shadow-md overflow-hidden">

          <Image src={image} alt={heading} className="object-cover" />
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold text-green-600">{heading}</h2>
        <p className="text-xl text-gray-700 mt-2">{para}</p>
      </div>
    </div>
  );
};

export default ChooseCard;
