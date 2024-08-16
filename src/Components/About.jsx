import React from "react";
import { assests } from "../assets/assests";

const About = () => {
  return (
    <div
      id="About"
      className="outer w-full min-h-screen flex items-center justify-center p-4 md:min-h-screen "
    >
      <div className="container flex flex-col mx-auto justify-center items-center space-y-6 md:space-y-0 md:space-x-8 md:flex-row ">
        <div className="img">
          <img
            className=" h-48 w-80 rounded-xl object-cover md:h-64 md:w-96"
            src={assests.laptop}
            alt=""
          />
        </div>
        <div className="about-info md:w-2/5 space-y-2 bg-white">
          <p className=" text-2xl font-bold text-center md:text-start">
            <span className="">About Me</span>
          </p>
          <p className=" font-medium  ">
            I am a skilled Front-End Web Developer with experience in creating
            intuitive and visually appealing user interfaces. I specialize in
            building responsive web applications and implementing complex
            functionalities to enhance user experiences. With a strong
            foundation in modern web development practices, I am committed to
            delivering clean, efficient code and adhering to best design
            practices. My journey in web development has equipped me with the
            ability to translate ideas into polished digital solutions. I excel
            in dynamic environments where I can apply my problem-solving skills
            and continuously expand my knowledge. I am eager to collaborate on
            projects that advance web development and create meaningful user
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
