import React, { useState } from "react";
import Header from "../Common/Header";
import HomePageHero from "../components/HomePageHero";
import "../App.scss";
import TextField from "../Common/TextField";
import DropDown from "../Common/DropDown";
import GlowingBtn from "../Common/GlowingBtn";
import Result from "../components/Results";
import CopyRight from "../Common/CopyRight";

const HomePage = () => {
  const [price, setprice] = useState();
  const [target, settarget] = useState();
  const [stoploss, setstoploss] = useState();
  const [noOfStocks, setnoOfStocks] = useState();
  const [longOrShort, setLongOrSort] = useState("Long");
  const [profit, setProfit] = useState();
  const [loss, setLoss] = useState();

  const changePrice = (event) => {
    let newValue = parseFloat(event.target.value);
    console.log(newValue);
    setprice(newValue);
  };
  const changeTarget = (event) => {
    let newValue = parseFloat(event.target.value);
    settarget(newValue);
  };
  const changeStopLoss = (event) => {
    let newValue = parseFloat(event.target.value);
    setstoploss(newValue);
  };
  const changeNoOfStock = (event) => {
    let newValue = parseFloat(event.target.value);
    setnoOfStocks(newValue);
  };

  const ChangeLongOrShort = (event) => {
    setLongOrSort(event.target.value);
  };

  const submit = () => {
    console.log("clicked");
    if (longOrShort === "Long") {
      setProfit(parseFloat((target - price) * noOfStocks).toFixed(2));
      setLoss(parseFloat((price - stoploss) * noOfStocks).toFixed(2));
    } else if (longOrShort === "Short") {
      setProfit(parseFloat((price - target) * noOfStocks).toFixed(2));
      setLoss(parseFloat((stoploss - price) * noOfStocks).toFixed(2));
    } else {
      console.log("Something else happend");
    }
  };

  return (
    <section className="homePage">
      <Header styled="homePage__header">CandleLamp</Header>
      <HomePageHero styled="homePage__hero"></HomePageHero>

      <TextField styled="homePage__input--1" onChange={changePrice}>
        Price
      </TextField>
      <TextField styled="homePage__input--2" onChange={changeTarget}>
        Target
      </TextField>
      <TextField styled="homePage__input--3" onChange={changeStopLoss}>
        StopLoss
      </TextField>
      <TextField styled="homePage__input--4" onChange={changeNoOfStock}>
        No. of shares
      </TextField>
      <DropDown
        styled="homePage__dropdown"
        onChange={ChangeLongOrShort}
        value={longOrShort}
      ></DropDown>
      <GlowingBtn styled="homePage__btn" onClick={submit}>
        Calculate
      </GlowingBtn>

      <Result styled="homePage__result" profit={profit} loss={loss}></Result>
      <CopyRight styled="homePage__copyright"></CopyRight>
    </section>
  );
};

export default HomePage;
