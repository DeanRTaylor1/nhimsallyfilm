import React from "react";

import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

import PackageSwiper from "./Components/packageSwiper/PackageSwiper";

const BookingPage: React.FC = () => {
  return (
    <div className="grid overflow-hidden h-screen w-screen grid-cols-1 grid-rows-layout md:justify-items-center">
      <Navbar />
      <div className="w-full h-auto flex justify-center overflow-y-scroll ">
        <div className="h-fit w-96 md:w-3/6 p-4 flex flex-col justify-center items-center gap-4">
          <PackageSwiper packageName="individual" />
          <PackageSwiper packageName="couple" />
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