import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="font-medium text-2xl z-10 hover:cursor-pointer">
        NhimSally
      </div>
      {/* Mobile Nav */}
      <div className="group">
        <IconContext.Provider
          value={{ color: "rgb(24 24 27)", className: "global-class-name" }}
        >
          <GiHamburgerMenu className="hamburger" />
        </IconContext.Provider>
        <div className="navbarDropdownList">
          <ul className="flex flex-col gap-4 pt-12">
            <li className="navbarDropdownListItem">Galleries</li>
            <li className="navbarDropdownListItem">About Me</li>
            <li className="navbarDropdownListItem">Contact</li>
          </ul>
        </div>
      </div>
      {/* Tablet and desktop Nav */}
      <div className="hidden md:flex">
        <ul className="flex gap-4 ">
          <li className="navbarStandardListItem">Galleries</li>
          <li className="navbarStandardListItem">About Me</li>
          <li className="navbarStandardListItem">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
