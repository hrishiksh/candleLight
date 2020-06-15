import React from "react";
import "./Common.scss";
import logo from "../assets/logo.svg";

const Header = (props) => {
  return (
    <section className={"header " + props.styled}>
      <div className="header__logo">
        <img src={logo} alt="" className="header__logo--img" />
        <h1 className="header__logo--text">{props.children}</h1>
      </div>

      <nav className="header__item"></nav>
    </section>
  );
};

export default Header;
