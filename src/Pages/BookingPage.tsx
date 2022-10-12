import React from "react";

import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

import PackageSwiper from "./Components/packageSwiper/PackageSwiper";

const BookingPage: React.FC = () => {
  return (
    <div className="grid overflow-hidden h-screen w-screen grid-cols-1 grid-rows-layout md:justify-items-center">
      <Navbar />
      <div className="w-full h-auto flex justify-center overflow-y-scroll ">
        <div className="h-fit w-96 md:h-max md:w-2/4 p-4 flex flex-col justify-center items-center gap-8">
          <div className="flex justify-center items-center text-2xl font-medium hover:cursor-pointer hover:bg-slate-50 w-24">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ig.me/m/nhimsally.film"
            >
              Book Here
            </a>
          </div>
          <div>Personal:</div>
          <PackageSwiper packageName="individual" />
          <div>Couples:</div>
          <PackageSwiper packageName="couple" />
          <div>Wedding:</div>
          <PackageSwiper packageName="wedding" />
        </div>
      </div>
      {/* {!imageLoaded && <Spinner />}
      {imageLoaded && (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 justify-items-center items-center p-4 md:w-4/6 overflow-auto">
          {images
            .filter((item) => {
              return item.group === "wedding";
            })
            .sort((a, b) => {
              return a.order - b.order;
            })
            .map((item) => {
              return (
                // add use dispatch on click for each image to update the galleryview
                <Link to="/Galleries/GalleryView">
                  <img
                    key={item.id}
                    className="hover:cursor-pointer"
                    alt="galleryimage"
                    src={item.imageurl}
                  />
                </Link>
              );
            })}
        </div>
      )} */}

      <Footer />
    </div>
  );
};

export default BookingPage;
