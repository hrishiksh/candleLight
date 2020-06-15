import React from "react";
import Header from "../Common/Header";
import HomePageHero from "../components/HomePageHero";
import "../App.scss";
import TextField from "../Common/TextField";
import DropDown from "../Common/DropDown";
import GlowingBtn from "../Common/GlowingBtn";
import Result from "../components/Results";
import CopyRight from "../Common/CopyRight";

const HomePage = () => {
  return (
    <section className="homePage">
      <Header styled="homePage__header">CandleLamp</Header>
      <HomePageHero styled="homePage__hero"></HomePageHero>
      <TextField styled="homePage__input--1">Price</TextField>
      <TextField styled="homePage__input--2">Target</TextField>
      <TextField styled="homePage__input--3">StopLoss</TextField>
      <TextField styled="homePage__input--4">No. of shares</TextField>
      <DropDown styled="homePage__dropdown"></DropDown>
      <GlowingBtn styled="homePage__btn">Calculate</GlowingBtn>
      <Result styled="homePage__result"> </Result>
      <CopyRight styled="homePage__copyright"></CopyRight>
    </section>
  );
};

export default HomePage;
