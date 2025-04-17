import React from "react";
import InfoCard from "./infoCard";
import {icon ,icon1,icon2} from "@/public/index"; 
const CompanyBackground = () => {
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
    <div>
      <div className="relative bg-white h-80 overflow-hidden bg-lowpoly">
              {/* Curved Green Shape */}
              <div className="absolute top-0 right-[-60] w-150 h-80 theme-bg rounded-b-full flex items-center justify-center z-10 border-b-1 border-l-12 border-gray-300">
                <h2 className="text-white text-lg md:text-5xl font-semibold uppercase sm:ml-14  text-right pr-20">Company Background</h2>
              </div>
      
      </div>
      <div className="bg-[#409a3c] text-white px-6 md:px-20 py-8 mt-8">
        <p className="mb-4 text-lg">
          Al-Huda Woodworks was established & registered in 2001. We are
          importer, exporter and manufacturer of high quality wooden doors,
          wardrobes, office and home furniture. We have a lot of satisfied
          customers, our prime goal is to perform and complete every project
          with our technical and expert team. Our aim is to provide our best
          services to our clients. We deal in Pine Wood, Yellow Pine, Mohagani,
          Spally Wood, Red Oak, Ash Wood, Beach Wood, Diyar Wood, Walnut Wood
          and Super Gloss HDF Board in kitchen cabinets and wardrobes.
        </p>
        <p className="mb-4 text-base leading-relaxed">
          We design and build modern and classic furniture to home, office,
          commercial and industrial living space. We produce customize fitted
          furniture, of the highest quality and to ensure we meet all of our
          client’s requirements and even exceed their expectation with customer
          satisfaction.
        </p>

        <h3 className="text-white font-medium text-3xl mb-2">
          Transforming Your Home & Offices
        </h3>
      </div>

      <div className="pt-10 px-6 md:px-20 flex flex-col md:flex-row gap-6  items-center justify-center bg-lowpoly">
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            heading={card.heading}
            para={card.para}
            image={card.image}
          />
        ))}
      </div>
      
      <div className="bg-[red]">
   

      </div>


    </div>
  );
};

export default CompanyBackground;
