import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import MainSwiper from "./Components/swiperHome/swiper";
import SwiperLarge from "./Components/SwiperLandscape/Swiper2";

const Home: React.FC = () => {
  return (
    <div className="grid overflow-hidden h-screen w-screen grid-cols-1 grid-rows-layout md:justify-items-center">
      <Navbar />
      <div className="flex flex-col gap-4 justify-center items-start p-4 md:w-4/6 overflow-auto">
        <MainSwiper />
        <div className="flex w-full items-center justify-center">
          <div className="flex items-center justify-center gap-8 p-4 w-11/12 rounded-sm border-zinc-900 border-opacity-60">
            <div className="text-xl h-fit p-2 rounded-sm text-zinc-900 font-extralight hover:cursor-pointer hover:bg-slate-50">
              View Galleries
            </div>
            <div className="text-xl h-fit p-2 rounded-sm text-zinc-900 font-extralight hover:cursor-pointer hover:bg-slate-50">
              Make A Booking
            </div>
          </div>
        </div>
        <SwiperLarge />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
