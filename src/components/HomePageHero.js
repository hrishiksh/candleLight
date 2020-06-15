import React from "react";
import Headline from "../Common/HeadLine";
import Subtitle from "../Common/Subtitle";
import heroImg from "../assets/heroImg.svg";
import "./Components.scss";

const HomePageHero = (props) => {
  return (
    <section className={"HomePageHero " + props.styled}>
      <Headline>Trade Calculator</Headline>
      <Subtitle>Calculate your P/L with brockrage charges</Subtitle>
      <img src={heroImg} alt="" className="HomePageHero__SvgContainer" />
    </section>
  );
};

export default HomePageHero;
