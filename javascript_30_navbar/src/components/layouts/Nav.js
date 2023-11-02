import React, { useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__brand">
        <Link to="/" className="nav__brand__link">
          NavBar
        </Link>
      </div>
      <div className="nav__icons" onClick={() => setShowNav(!showNav)}>
        {showNav ? <FiX /> : <FiMenu />}
      </div>
      <div className={`${showNav ? "nav__menu show" : "nav__menu"}`}>
        <ul className="nav__menu__list">
          <li className="nav__menu__list__items">
            <Link to="" className="nav__menu__list__items__link">
              Home
            </Link>
          </li>
          <li className="nav__menu__list__items">
            <Link to="" className="nav__menu__list__items__link">
              Products
            </Link>
          </li>{" "}
          <li className="nav__menu__list__items">
            <Link to="" className="nav__menu__list__items__link">
              Services
            </Link>
          </li>{" "}
          <li className="nav__menu__list__items">
            <Link to="" className="nav__menu__list__items__link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
