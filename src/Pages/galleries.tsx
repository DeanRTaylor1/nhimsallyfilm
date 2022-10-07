import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../firebase/firebase";

import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Spinner from "./Components/spinner/spinner";

const Galleries: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [images, setImages] = useState<any[]>([]);

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
              <Link to="/Galleries/personal1">
                <img
                  key={item.id}
                  className="hover:cursor-pointer"
                  alt="galleryimage"
                  src={item.imageurl}
                />
              </Link>
            );
          })}
        {/* // <img
        //   alt="Camelia"
        //   src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/galleriespage%2F000044%20copy.jpg?alt=media&token=91250084-31f9-4ac6-858b-2daf70787ee2"
        // ></img>
        // <img
        //   alt="Camelia"
        //   src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/galleriespage%2F000044%20copy.jpg?alt=media&token=91250084-31f9-4ac6-858b-2daf70787ee2"
        // ></img>
        // <img
        //   alt="Camelia"
        //   src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/galleriespage%2F000044%20copy.jpg?alt=media&token=91250084-31f9-4ac6-858b-2daf70787ee2"
        // ></img>
        // <img
        //   alt="Camelia"
        //   src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/galleriespage%2F000044%20copy.jpg?alt=media&token=91250084-31f9-4ac6-858b-2daf70787ee2"
        // ></img>
        // <img
        //   alt="Camelia"
        //   src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/galleriespage%2F000044%20copy.jpg?alt=media&token=91250084-31f9-4ac6-858b-2daf70787ee2"
        // ></img>
        // <img
        //   alt="Camelia"
        //   src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/galleriespage%2F000044%20copy.jpg?alt=media&token=91250084-31f9-4ac6-858b-2daf70787ee2"
        // ></img>
        // <img
        //   alt="Camelia"
        //   src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/galleriespage%2F000044%20copy.jpg?alt=media&token=91250084-31f9-4ac6-858b-2daf70787ee2"
        // ></img>
        // <img
        //   alt="Camelia"
        //   src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/galleriespage%2F000044%20copy.jpg?alt=media&token=91250084-31f9-4ac6-858b-2daf70787ee2"
        // ></img>
        // <img
        //   alt="Camelia"
        //   src="https://firebasestorage.googleapis.com/v0/b/nhimsallyfilm.appspot.com/o/galleriespage%2F000044%20copy.jpg?alt=media&token=91250084-31f9-4ac6-858b-2daf70787ee2"
        // ></img> */}
      </div>
      <Footer />
    </div>
  );
};

export default Galleries;
