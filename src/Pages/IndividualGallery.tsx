import React, { useEffect, useState } from "react";

import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../firebase/firebase";

//redux
import { useSelector } from "react-redux";

import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Spinner from "./Components/spinner/spinner";

const IndividualGallery: React.FC = () => {
  const currentImage = useSelector((state: any) => state.image.imagename);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [images, setImages] = useState<any[]>([]);

  const getGalleryImages = async () => {
    try {
      console.log(currentImage);
      const images = collection(db, currentImage);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid overflow-hidden h-screen w-screen grid-cols-1 grid-rows-layout md:justify-items-center">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 justify-items-center items-center p-4 md:w-4/6 overflow-auto">
        {!imageLoaded && (
          <div>
            <Spinner />
          </div>
        )}
        {imageLoaded &&
          images.map((item) => {
            return (
              <img
                key={item.id}
                className="hover:cursor-pointer"
                alt="galleryimage"
                src={item.imageurl}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default IndividualGallery;
