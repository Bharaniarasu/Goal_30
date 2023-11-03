import "./banner.scss";

import React from "react";
import capterra_icon from "../../assets/Capterra Logo.svg";
import alternate_icon from "../../assets/AlternativeTo Logo.svg";
import gradie_icon from "../../assets/Gradie_Icon.svg";
import poster_image from "../../assets/Hero Image.png";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1 className="banner__content__display_text">
          {" "}
          Ondeck is your remote <span>conference calling tool</span>
        </h1>
        <p>
          Ondeck is a service that allows you to create beautiful, online and
          encrypted video calls for you and your remote team.
        </p>
        <button className="btn">Try for free</button>
        <div className="banner__content__review">
          <p>5.0 Rating based on review from :</p>
          <img src={capterra_icon} alt="" />
          <img src={alternate_icon} alt="" />
          <img src={gradie_icon} alt="" />
        </div>
      </div>
      <div className="banner__poster">
        <img src={poster_image} alt="" />{" "}
      </div>
    </section>
  );
};

export default Banner;
