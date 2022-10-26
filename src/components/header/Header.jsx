import React from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Brad Thompson</h1>
        <h5 className="text-light">Software, Data, & Operations Specialist</h5>

        <CTA />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
