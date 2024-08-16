import React from "react";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className=" font-Poppins">
      <Navbar></Navbar>
      <Herosection></Herosection>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default App;
