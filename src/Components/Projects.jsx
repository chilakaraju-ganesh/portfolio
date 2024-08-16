import React from "react";
import { assests } from "../assets/assests";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineExport } from "react-icons/ai";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="outter-container min-h-[120vh] flex flex-col items-center justify-center p-4 space-y-6 md:min-h-screen md:space-y-6"
    >
      <div className="title">
        <span className=" mx-auto text-start text-2xl font-bold ">
          My Projects
        </span>
      </div>
      <div className="pro-1  mx-auto flex flex-col items-center justify-center md:flex-row-reverse space-y-6 md:space-y-0 md:space-x-6">
        <div className="img  ">
          <img
            src={assests.ai_chatbot}
            alt=""
            className=" h-48 w-80 object-cover rounded-lg md:h-64 md:w-96"
          />
        </div>
        <div className="info  md:w-2/5 md:space-y-4 ">
          <p className=" text-xl font-bold ">
            <span className="">AI Chatbot</span>
          </p>
          <p className=" font-medium ">
            Created an AI chatbot leveraging the Google Gemini AI API to provide
            real-time responses based on user inputs. Developed the chatbot
            using React.js to enhance user engagement through a modern,
            intuitive interface. Implemented Tailwind CSS for a sleek,
            responsive design that ensures seamless interaction. Designed and
            optimized a user-friendly interface that fosters intuitive and
            efficient communication with the chatbot, ensuring a smooth user
            experience.
          </p>
          <div className="code-link flex text-xl font-semibold space-x-6">
            <div className=" flex items-center space-x-1">
              <a
                href="https://github.com/chilakaraju-ganesh/ai-chatbot.git"
                target="_blank"
              >
                Code
              </a>
              <div>
                <IoLogoGithub />
              </div>
            </div>
            <div className=" flex items-center space-x-1">
              <a
                href=" https://chilakaraju-ganesh.github.io/ai-chatbot/"
                target="_blank"
              >
                Live Demo
              </a>
              <div>
                <AiOutlineExport />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pro-2  mx-auto flex flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="img  ">
          <img
            src={assests.currency_converter}
            alt=""
            className="  h-48 w-80  object-cover rounded-lg md:h-64 md:w-96"
          />
        </div>
        <div className="info md:w-2/5 md:space-y-4">
          <p className=" text-xl font-bold ">
            <span className="">Currency Converter</span>
          </p>
          <p className=" font-medium ">
            Developed a responsive web application that facilitates real-time
            currency conversion using the ExchangeRate-API. Demonstrated
            advanced front-end development skills by seamlessly integrating
            third-party APIs, such as the Flags API, to dynamically display
            country flags alongside currency options. Designed and implemented a
            user-friendly interface that enhances usability and provides
            intuitive navigation for seamless currency conversion.
          </p>
          <div className="code-link flex text-xl font-semibold space-x-6">
            <div className=" flex items-center space-x-1">
              <a
                href="https://github.com/chilakaraju-ganesh/Currency-Converter.git"
                target="_blank"
              >
                Code
              </a>
              <div>
                <IoLogoGithub />
              </div>
            </div>
            <div className=" flex items-center space-x-1">
              <a
                href="https://chilakaraju-ganesh.github.io/Currency-Converter/"
                target="_blank"
              >
                Live Demo
              </a>
              <div>
                <AiOutlineExport />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
