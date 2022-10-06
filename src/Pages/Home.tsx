import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import MainSwiper from "./Components/swiper";
import SwiperLarge from "./Components/SwiperPortrait/Swiper2";

const Home: React.FC = () => {
  return (
    <div className="grid overflow-hidden h-screen w-screen grid-cols-1 grid-rows-layout md:justify-items-center">
      <Navbar />
      <div className="flex flex-col gap-4 justify-center items-start p-4 md:w-4/6 overflow-auto">
        <MainSwiper />
        <div className="flex w-full items-center justify-center">
          <div className="flex items-center justify-center p-4 w-11/12 border-b border-t border-l border-r rounded-md border-zinc-900 border-opacity-60">
            Welcome to my website, please browse my galleries and contact me via
            instagram to book.
          </div>
        </div>
        <SwiperLarge />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
