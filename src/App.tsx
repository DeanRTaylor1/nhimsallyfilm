//React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

//Pages
import Home from "./Pages/Home";
import Galleries from "./Pages/galleries";

//styles
import "./index.css";

function App() {
  const currentImage = useSelector((state: any) => state.image.name);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Galleries" element={<Galleries />} />
        <Route path={`/Galleries/${currentImage}`} element={<Galleries />} />
        {/*<Route path={`/Profile/${userID}`} element={<UserProfile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
