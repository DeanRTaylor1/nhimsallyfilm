import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

// Import Swiper styles
import "swiper/css";
import Spinner from "./spinner/spinner";

const MainSwiper: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [images, setImages] = useState<any[]>([]);

  const getGalleryImages = async () => {
    try {
      const images = collection(db, "homepageimages");
      const imagesSnap = await getDocs(images);
      let newArr: any[] = [];
      if (!imagesSnap.empty) {
        imagesSnap.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let obj = { id: doc.id, ...doc.data() };
          newArr.push(obj);
        });
        setImages(newArr);
        setImageLoaded(true);
        return;
      } else {
        setImageLoaded(false);
        console.log("no such doc");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGalleryImages();
  }, []);

  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
      spaceBetween={5}
      loop={true}
      centeredSlides={true}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex items-center justify-center w-full h-1/3 md:h-11/12"
    >
      {!imageLoaded && (
        <div>
          <SwiperSlide>
            <Spinner />
          </SwiperSlide>
          <SwiperSlide>
            <Spinner />
          </SwiperSlide>
          <SwiperSlide>
            <Spinner />
          </SwiperSlide>
        </div>
      )}
      {imageLoaded &&
        images.map((item) => {
          return (
            <SwiperSlide key={item.id} className="group">
              <img
                className="swiperImage group-hover:opacity-70 hover:cursor-pointer"
                alt="galleryimage"
                src={item.imageurl}
              />
              <div className="text-zinc-900 text-2xl origin-center md:group-hover:scale-100 absolute scale-0 top-0 left-0 flex items-center justify-center w-64 md:w-full h-full cursor-pointer">
                {item.imagename}
              </div>
            </SwiperSlide>
          );
        })}
      ...
    </Swiper>
  );
};

export default MainSwiper;
