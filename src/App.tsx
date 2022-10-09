//React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Galleries from "./Pages/galleries";

//styles
import "./index.css";
import IndividualGallery from "./Pages/IndividualGallery";

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
        {/*<Route path={`/Profile/${userID}`} element={<UserProfile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
