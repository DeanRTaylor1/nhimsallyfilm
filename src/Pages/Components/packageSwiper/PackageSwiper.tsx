import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

//import swiper modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "./packageSwiper.css";
import Spinner from "../spinner/spinner";

interface PackageSwiperProps {
  packageName: String;
}

const PackageSwiper: React.FC<PackageSwiperProps> = (props) => {
  const { packageName } = props;
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [images, setImages] = useState<any[]>([]);

  const getGalleryImages = async () => {
    try {
      const images = collection(db, "packages");
      const imageQuery = query(images, limit(9));
      const imagesSnap = await getDocs(imageQuery);

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
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        // when window width is >= 640px
        1400: {
          width: 768,
          slidesPerView: 1,
        },
      }}
      spaceBetween={5}
      loop={true}
      centeredSlides={true}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {!imageLoaded && (
        <SwiperSlide>
          <Spinner />
        </SwiperSlide>
      )}
      {imageLoaded &&
        images
          .filter((item) => {
            return item.group === packageName;
          })
          .sort((a, b) => {
            return a.order - b.order;
          })
          .map((item) => {
            return (
              // add use dispatch on click for each image to update the galleryview

              <SwiperSlide key={item.id} className="group h-96">
                <img
                  className="group-hover:opacity-70 hover:cursor-pointer"
                  alt="galleryimage"
                  src={item.imageurl}
                />
              </SwiperSlide>
            );
          })}
      ...
    </Swiper>
  );
};

export default PackageSwiper;
