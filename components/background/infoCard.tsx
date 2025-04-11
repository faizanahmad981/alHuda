import Image from "next/image";
import React from "react";

const InfoCard = ({ heading, para, image }) => {
  return (
    <div className="w-64 h-[500px] bg-gray-300 rounded-t-[460px] pt-8 px-4 pb-6 relative shadow-md">
      {/* Circular Image */}
      <div className="flex justify-center items-center">
        <div className="w-54 h-54 bg-[#409a3c] rounded-full border-8 border-white flex items-center justify-center shadow-md overflow-hidden">
       
          <Image src={image} alt={heading} className="w-[70] h-[70] object-cover" />
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-16 text-center">
        <h2 className="text-lg font-semibold text-green-600">{heading}</h2>
        <p className="text-sm text-gray-700 mt-2">{para}</p>
      </div>
    </div>
  );
};

export default InfoCard;
