"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import NavLogo from "@/public/logoo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 py-2 ">
      <div className="xl:max-w-7xl xl:mx-auto max-w-full px-[8%] w-full flex items-center justify-between flex-wrap lg:flex-nowrap">
        
        {/* Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Image
            src={NavLogo}
            alt="logo"
            width={220}
            height={55}
            className="cursor-pointer"
          />

          {/* Hamburger Icon - visible on mobile only */}
          <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:justify-end lg:w-auto mt-4 lg:mt-0 `}
        >
          <ul className="flex flex-col lg:flex-row justify-center lg:justify-end items-start lg:items-center gap-4 lg:gap-6 text-base text-black font-semibold">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Background", id: "background" },
              { label: "Door", id: "doors" },
              { label: "OFFICE", id: "office" },
              { label: "Furniture", id: "furniture" },
              { label: "Kitchen", id: "kitchen" },
              { label: "Wardrobes", id: "wardrobes" },
              { label: "Duties", id: "duties" },
              { label: "Why Us", id: "whyus" },
              { label: "Contact", id: "end" },
            ].map((item) => (
              <li key={item.id} className="hover:text-blue-300">
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
