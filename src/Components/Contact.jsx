import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="outter-container min-h-[50vh] flex flex-col items-center justify-center p-4 space-y-6 md:space-y-6"
    >
      <div className="title flex flex-col mx-auto space-y-6">
        <span className=" mx-auto text-start text-2xl font-bold ">
          Contact Me
        </span>
        <a
          href="mailto:chilakarajuganesh16@gmail.com"
          target="_blank"
          className=" font-medium flex items-center md:text-lg"
        >
          Gmail:- chilakarajuganesh16@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ganeshchilakaraju/"
          target="_blank"
          className=" font-medium flex items-center md:text-lg"
        >
          Linkedin:- ganesh-chilakaraju
        </a>
        <p className=" text-xl font-bold text-center md:text-3xl ">Thank You</p>
      </div>
    </div>
  );
};

export default Contact;
