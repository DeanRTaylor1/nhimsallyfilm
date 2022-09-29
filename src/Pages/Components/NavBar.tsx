import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <IconContext.Provider
        value={{ color: "rgb(24 24 27)", className: "global-class-name" }}
      >
        <GiHamburgerMenu className="hamburger" />
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
