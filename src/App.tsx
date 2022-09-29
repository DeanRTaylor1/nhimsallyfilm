//React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Home" element={<Home />} />
    <Route path={`/Profile/${userID}`} element={<UserProfile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
