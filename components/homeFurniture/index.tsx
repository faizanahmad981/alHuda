import React from "react";
import Image from "next/image";
import { homeFurniture } from "@/public/index";

const HomeFurniture = () => {
  return (
    <div className="w-full bg-lowpoly pb-64">
      {/* Wood3 image in the center */}

      <div className="relative w-full px-12">
        <Image
          src={homeFurniture}
          alt="Wood Image"
          className="w-full object-cover rounded2xl"
        />

        <p className="absolute bottom-6 left-24 text-white  text-3xl md:text-3xl lg:text-6xl font-[cursive] italic tracking-wide drop-shadow-md">
          Wooden elegance
          <br />
          for the modern home!
        </p>
      </div>

      {/* Heading with theme-bg */}
      <h1 className="theme-bg text-white text-6xl font-bold px-4 py-4 w-full text-center">
        HOME FURNITURE
      </h1>
      <div className="bg-lowpoly text-2xl flex py-12">
        <p className="mx-auto">
          Our custom carpentry expertise brings you exquisite HomeFurniture
          furniture that elevates <br /> your workspace. From sleek desks to
          sophisticated storage solutions, we craft <br /> pieces that combine
          style, comfort, and durability.
        </p>
      </div>
    </div>
  );
};

export default HomeFurniture;
