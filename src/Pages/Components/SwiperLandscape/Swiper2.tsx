import React, { useEffect, useState } from "react";
import Spinner from "../spinner/spinner";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

export default function SwiperLarge() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [images, setImages] = useState<any[]>([]);

  const getGalleryImages = async () => {
    try {
      const images = collection(db, "homelandscapeslider");
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
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation
        className="mySwiper"
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
                  className="group-hover:opacity-70 hover:cursor-pointer"
                  alt="galleryimage"
                  src={item.imageurl}
                />
                <div className="text-zinc-900 text-2xl origin-center group-hover:scale-100 absolute scale-0 top-0 left-0 flex items-center justify-center w-full h-full cursor-pointer">
                  {item.imagename}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
