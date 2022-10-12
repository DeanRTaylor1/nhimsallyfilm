//React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Galleries from "./Pages/galleries";
import BookingPage from "./Pages/BookingPage";
import IndividualGallery from "./Pages/IndividualGallery";

//styles
import "./index.css";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Galleries" element={<Galleries />} />
        <Route
          path={`/Galleries/GalleryView`}
          element={<IndividualGallery />}
        />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/Contact" element={<Contact />} />
        {/*<Route path={`/Profile/${userID}`} element={<UserProfile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
