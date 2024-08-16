import React from "react";
import { assests } from "../assets/assests";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Herosection = () => {
  return (
    <section
      id="Herosection"
      className=" min-h-screen flex items-center justify-center p-4"
    >
      <div className="container mx-auto flex flex-col-reverse items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="info text-center md:text-left ">
          <p className="text-2xl font-bold p-2 md:text-5xl">
            Front-End Web Developer
          </p>
          <p className="text-sm p-2 font-medium md:text-xl">
            Hi, I'm Ganesh Chilakaraju. <br /> A passionate Front-end Web
            Developer based in Hyderabad, India.
          </p>
          <div className="flex justify-center md:justify-start p-2 text-2xl space-x-2">
            <span className=" text-[#0077b5]">
              <a
                href="https://www.linkedin.com/in/ganeshchilakaraju/"
                target="_blank"
              >
                <IoLogoLinkedin />
              </a>
            </span>
            <span>
              <a href="https://github.com/chilakaraju-ganesh" target="_blank">
                <IoLogoGithub />
              </a>
            </span>
          </div>
          <div className="techstack flex flex-col items-center md:flex-row p-2 my-8 space-y-4 md:space-y-0 md:space-x-8 ">
            <p className="font-semibold text-sm">Tech Stack |</p>
            <div className="tech-info flex space-x-6 text-2xl">
              <span className="text-red-600">
                <FaHtml5 />
              </span>
              <span className="text-sky-600">
                <FaCss3Alt />
              </span>
              <span className="text-yellow-500 bg-black">
                <SiJavascript />
              </span>
              <span className="text-sky-600">
                <FaReact />
              </span>
              <span className="text-violet-700">
                <FaBootstrap />
              </span>
              <span className="text-sky-500">
                <RiTailwindCssFill />
              </span>
            </div>
          </div>
        </div>
        <div className="img mb-8 md:mb-0">
          <img
            src={assests.ganesh}
            alt=""
            className="h-36 w-36 object-cover rounded-full md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
