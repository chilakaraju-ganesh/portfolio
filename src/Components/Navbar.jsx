import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed  top-0 bg-white text-black w-full p-4 border-b-2 border-[#e5e5e5] ">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-xl font-bold">
          Ganesh <span className=" text-[#6b705c]">Chilakaraju</span>{" "}
        </div>
        <div className="hidden  md:flex space-x-10">
          <a href="#Herosection" className=" font-bold hover:text-[#6e06f2]  ">
            Home
          </a>
          <a href="#About" className=" font-bold hover:text-[#6e06f2] ">
            About
          </a>
          <a href="#Projects" className=" font-bold hover:text-[#6e06f2] ">
            Projects
          </a>
          <a href="#Contact" className=" font-bold hover:text-[#6e06f2] ">
            Contact
          </a>
        </div>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className=" block text-2xl font-medium md:hidden"
        >
          <IoMenu />
        </div>
      </div>

      <div
        className={` md:hidden flex flex-col justify-center items-center transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        } `}
      >
        <a
          onClick={() => setIsOpen((prev) => !prev)}
          href="#Herosection"
          className="block font-bold py-1 pt-2 "
        >
          Home
        </a>
        <a
          onClick={() => setIsOpen((prev) => !prev)}
          href="#About"
          className="block font-bold py-1"
        >
          About
        </a>
        <a
          onClick={() => setIsOpen((prev) => !prev)}
          href="#Projects"
          className="block font-bold py-1"
        >
          Projects
        </a>
        <a
          onClick={() => setIsOpen((prev) => !prev)}
          href="#Contact"
          className="block font-bold py-1"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
