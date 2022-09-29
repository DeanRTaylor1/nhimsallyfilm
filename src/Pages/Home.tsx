import React from "react";
import Navbar from "./Components/NavBar";

const Home: React.FC = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-1 grid-rows-layout">
      <Navbar />
      <div className="flex justify-center items-center">Body</div>
      <div className="flex justify-center items-center">Footer</div>
    </div>
  );
};

export default Home;
