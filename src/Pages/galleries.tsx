import React from "react";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

const Galleries: React.FC = () => {
  return (
    <div className="grid overflow-hidden h-screen w-screen grid-cols-1 grid-rows-layout md:justify-items-center">
      <Navbar />
      <div></div>
      <Footer />
    </div>
  );
};

export default Galleries;
