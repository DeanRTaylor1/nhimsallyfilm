import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import MainSwiper from "./Components/swiper";

const Home: React.FC = () => {
  return (
    <div className="grid overflow-hidden h-screen w-screen grid-cols-1 grid-rows-layout md:justify-items-center">
      <Navbar />
      <div className="flex justify-center items-start p-4 md:w-4/6">
        <MainSwiper />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
