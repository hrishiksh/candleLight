import React from "react";
import "./Component.scss";
import logo from "../assets/logo.png";

const Header = (props) => {
  return (
    <section className={"header " + props.styled}>
      <div className="header__logo">
        <img src={logo} alt="" className="header__logo--img" />
        <h1 className="header__logo--text">Tradings</h1>
      </div>

      <nav className="header__item"></nav>
    </section>
  );
};

export default Header;
