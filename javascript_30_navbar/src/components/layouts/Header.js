import "./header.scss";
import React from "react";
import logo_img from "../../assets/AlternativeTo Logo.svg";
const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <a className="nav__brand__logo" href="/">
          <div className="nav__brand__logo__container">
            <img src={logo_img} alt="logo" />
            <h4>Ondeck</h4>
          </div>
        </a>
      </div>
      <div className="nav__nav_links">
        <ul className="nav__nav_links__list_items">
          <li className="nav__nav_links__list_items__list_item">Products</li>
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
