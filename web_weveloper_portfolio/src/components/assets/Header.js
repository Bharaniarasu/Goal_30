import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./header.scss";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__brand">
        <h2>Johnathan Specter</h2>
      </div>
      <div className="nav__icon" onClick={() => setShowNav(!showNav)}>
        {showNav ? <FiX /> : <FiMenu />}
      </div>
      <div className="nav__menu">
        <ul className="nav__menu__list">
          <li className="nav__menu__list__item">
            <Link to="" className="nav__menu__list__item__link">
              Articles
            </Link>
          </li>
          <li className="nav__menu__list__item">
            <Link to="" className="nav__menu__list__item__link">
              Chats
            </Link>
          </li>
          <li className="nav__menu__list__item">
            <Link to="" className="nav__menu__list__item__link">
              Awards
            </Link>
          </li>
          <li className="nav__menu__list__item">
            <Link to="" className="nav__menu__list__item__link">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav__buttons">
        <button className="btn nav__buttons__button">
          <Link to="" className="nav__buttons__button__link">
            Get in touch
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
