import React, { useEffect, useState } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { imageActions } from "../store/image-slice";

import { Link } from "react-router-dom";

import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../firebase/firebase";

import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Spinner from "./Components/spinner/spinner";

const Galleries: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [images, setImages] = useState<any[]>([]);

  //redux
  const dispatch = useDispatch();
  const currentImage = useSelector((state: any) => state.image.imagename);

  const getGalleryImages = async () => {
    try {
      const images = collection(db, "galleriesPage");
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

  const updateStore = (event: React.MouseEvent<HTMLImageElement>) => {
    console.log(currentImage);
    const imagename = event.currentTarget.dataset.imagename!.toString();
    dispatch(
      imageActions.setCurrentImage({
        imagename: imagename,
      })
    );
  };

  return (
    <div className="grid overflow-hidden h-screen w-screen grid-cols-1 grid-rows-layout md:justify-items-center">
      <Navbar />

      {!imageLoaded && <Spinner />}
      {imageLoaded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 justify-items-center items-center p-4 md:w-4/6 overflow-auto">
          {images.map((item) => {
            return (
              // add use dispatch on click for each image to update the galleryview
              <Link to="/Galleries/GalleryView">
                <img
                  onMouseOver={(event) => updateStore(event)}
                  key={item.id}
                  className="hover:cursor-pointer"
                  data-imagename={item.imagename}
                  alt="galleryimage"
                  src={item.imageurl}
                />
              </Link>
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galleries;
