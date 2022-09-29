import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const MainSwiper: React.FC = () => {
  return (
    <Swiper
      spaceBetween={50}
      loop={true}
      centeredSlides={true}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex items-center justify-center h-4/6 md:h-1/2 w-full"
    >
      <SwiperSlide>
        <img
          className="swiperImage"
          alt="galleryimage"
          src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/homegallery%2Fgalleryimage%20(8).jpg?alt=media&token=ae524a02-afa8-49e5-8c1c-68a9e69fe0a7"
        ></img>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiperImage"
          alt="galleryimage"
          src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/homegallery%2Fgalleryimage%20(8).jpg?alt=media&token=ae524a02-afa8-49e5-8c1c-68a9e69fe0a7"
        ></img>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiperImage"
          alt="galleryimage"
          src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/homegallery%2Fgalleryimage%20(8).jpg?alt=media&token=ae524a02-afa8-49e5-8c1c-68a9e69fe0a7"
        ></img>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiperImage"
          alt="galleryimage"
          src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/homegallery%2Fgalleryimage%20(8).jpg?alt=media&token=ae524a02-afa8-49e5-8c1c-68a9e69fe0a7"
        ></img>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default MainSwiper;
