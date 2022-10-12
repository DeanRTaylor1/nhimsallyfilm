import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";

const Contact: React.FC = () => {
  return (
    <div className="grid overflow-hidden h-screen w-screen grid-cols-1 grid-rows-layout md:justify-items-center">
      <Navbar />
      <div className="flex flex-col gap-8 justify-center items-start p-4 md:w-4/6 overflow-auto">
        <div className="contactlinks">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ig.me/m/nhimsally.film"
          >
            Instagram
          </a>
        </div>
        <div className="contactlinks">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://m.me/nhimchupfilm"
          >
            Facebook
          </a>
        </div>
        <div className="contactlinks">
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto: nhimsally179@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
