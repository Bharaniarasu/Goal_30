// import "./header.scss";
import React from "react";
import logo_img from "../../assets/AlternativeTo Logo.svg";
import spence_icon from "../../assets/Spense_Icon.svg";
import fiber_icon from "../../assets/Fiber_Icon.svg";
import gradie_icon from "../../assets/Gradie_Icon.svg";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <a className="nav__brand__logo" href="/">
          <div className="nav__brand__logo__container">
            <img src={logo_img} alt="logo" />
            <h3>Ondeck</h3>
          </div>
        </a>
      </div>
      <div className="nav__nav_links">
        <ul className="nav__nav_links__list_items">
          <li className="nav__nav_links__list_items__list_item dropdown">
            Products
            <ul className="dropdown__menu">
              <li className="dropdown__menu__item">
                <div className="dropdown__menu__item__container">
                  <div className="dropdown__menu__item__container__icon">
                    <img src={spence_icon} alt="" className="" />
                  </div>
                  <div className="dropdown__menu__item__container__content">
                    <h4>Spense</h4>
                    <small>
                      Spense is a landing page for writers. Great for practicing
                      absolute positioning and flex layouts.
                    </small>
                  </div>
                </div>
              </li>
              <li className="dropdown__menu__item">
                <div className="dropdown__menu__item__container">
                  <div className="dropdown__menu__item__container__icon">
                    <img src={fiber_icon} alt="" className="" />
                  </div>
                  <div className="dropdown__menu__item__container__content">
                    <h4>Fiber Landing Page</h4>
                    <small>
                      An online portfolio generator. Great to practice flex/grid
                      layouts, and absolute positioning.
                    </small>
                  </div>
                </div>
              </li>{" "}
              <li className="dropdown__menu__item">
                <div className="dropdown__menu__item__container">
                  <div className="dropdown__menu__item__container__icon">
                    <img src={gradie_icon} alt="" className="" />
                  </div>
                  <div className="dropdown__menu__item__container__content">
                    <h4>Gradie Sign Up Page</h4>
                    <small>
                      Gradie is a simple sign up page, great to practice
                      centering layouts.
                    </small>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav__nav_links__list_items__list_item">Challenges</li>
          <li className="nav__nav_links__list_items__list_item">Resources</li>
          <li className="nav__nav_links__list_items__list_item">Other Links</li>
        </ul>
      </div>
      <div className="nav__nav_buttons">
        <button className="nav__nav_buttons__sign_in btn">Sign in</button>
        <button className="nav__nav_buttons__try_it btn">Try for Free</button>
      </div>
    </nav>
  );
};

export default Header;
