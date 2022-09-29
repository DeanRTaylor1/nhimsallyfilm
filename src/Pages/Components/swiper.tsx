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
      spaceBetween={5}
      loop={true}
      centeredSlides={true}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex items-center justify-center h-4/6 md:h-1/2 w-full"
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
            <SwiperSlide>
              <img
                className="swiperImage "
                alt="galleryimage"
                src={item.imageurl}
              ></img>
            </SwiperSlide>
          );
        })}
      {/* <SwiperSlide>
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
      </SwiperSlide> */}
      ...
    </Swiper>
  );
};

export default MainSwiper;
