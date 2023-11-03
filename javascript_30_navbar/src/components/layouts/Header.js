import "./header.scss";
import React, { useState } from "react";
import logo_img from "../../assets/AlternativeTo Logo.svg";
import spence_icon from "../../assets/Spense_Icon.svg";
import fiber_icon from "../../assets/Fiber_Icon.svg";
import gradie_icon from "../../assets/Gradie_Icon.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__brand">
        <div className="nav__brand__container">
          <img src={logo_img} alt="" className="brand_logo" />
          <h4>Ondeck</h4>
        </div>
      </div>
      <div className="nav__icons" onClick={() => setShowNav(!showNav)}>
        {showNav ? <FiX /> : <FiMenu />}
      </div>
      <div className={`${showNav ? "nav__menu show" : "nav__menu"}`}>
        <ul className="nav__menu__links">
          <li className="nav__menu__links__item">
            <div className="dropdown">
              <Link to="" className="nav__menu__links__item__link">
                Products
              </Link>
              <ul className="dropdown__menu">
                <li className="dropdown__menu__list">
                  <div className="dropdown__menu__list__icon">
                    <img src={spence_icon} alt="" />
                  </div>
                  <div className="dropdown__menu__list__content">
                    <h5>Spense</h5>
                    <small>
                      Spense is a landing page for writers. Greate for
                      practicing absolute positioning and flex layouts.
                    </small>
                  </div>
                </li>
                <li className="dropdown__menu__list">
                  <div className="dropdown__menu__list__icon">
                    <img src={fiber_icon} alt="" />
                  </div>
                  <div className="dropdown__menu__list__content">
                    <h5>Fiber Landing Page</h5>
                    <small>
                      An online portfolio generator. Great to practice flex/grid
                      layouts, and absolute positioning.
                    </small>
                  </div>
                </li>
                <li className="dropdown__menu__list">
                  <div className="dropdown__menu__list__icon">
                    <img src={gradie_icon} alt="" />
                  </div>
                  <div className="dropdown__menu__list__content">
                    <h5>Gradie Sign Up Page</h5>
                    <small>
                      Gradie is a simple sign up page, great to practice
                      centering layouts.
                    </small>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__menu__links__item">
            {" "}
            <Link to="" className="nav__menu__links__item__link">
              Challenges
            </Link>
          </li>
          <li className="nav__menu__links__item">
            {" "}
            <Link to="" className="nav__menu__links__item__link">
              Resources
            </Link>
          </li>
          <li className="nav__menu__links__item">
            {" "}
            <Link to="" className="nav__menu__links__item__link">
              Other Links
            </Link>
          </li>
        </ul>
        <div className="nav__buttons">
          <button className="btn">Sign in</button>
          <button className="btn">Try for free</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
