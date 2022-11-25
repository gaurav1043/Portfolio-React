import React from "react";
import "./header.css";
import CTA from "./CTA";
import image from "../../assets/png2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gaurav Madhavi</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={image} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
