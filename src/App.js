import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import HeadLine from "./components/HeadLine";
import TextField from "./components/TextField";
import InfoCard from "./components/InfoCard";

function App() {
  const [price, setprice] = useState(0.0);
  const [target, settarget] = useState(0.0);
  const [stoploss, setstoploss] = useState(0.0);
  const [noOfStocks, setnoOfStocks] = useState(0.0);

  const changePrice = (event) => {
    let newValue = parseFloat(event.target.value);
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

  let profit = (target - price) * noOfStocks;
  let loss = (price - stoploss) * noOfStocks;
  let profitPercent;
  let lossPercent;
  if (profitPercent === undefined && lossPercent === undefined) {
    profitPercent = 0.0;
    lossPercent = 0.0;
  } else {
    profitPercent = (profit / price) * 100;
    lossPercent = (loss / price) * 100;
  }

  return (
    <div className="homePage">
      <Header styled="homePage__header"></Header>
      <InfoCard
        title="Fund"
        percent="100"
        price="123"
        bgcol="blue"
        styled="homePage__card-1"
      ></InfoCard>
      <InfoCard
        title="Profit"
        percent={profitPercent}
        price={profit}
        bgcol="green"
        styled="homePage__card-2"
      ></InfoCard>
      <InfoCard
        title="Loss"
        percent={lossPercent}
        price={loss}
        bgcol="red"
        styled="homePage__card-3"
      ></InfoCard>
      <HeadLine text="Calculator" styled="homePage__headline"></HeadLine>
      <TextField
        placeholder="Price"
        styled="homePage__textfield--1"
        onChange={changePrice}
      ></TextField>
      <TextField
        placeholder="Target"
        styled="homePage__textfield--2"
        onChange={changeTarget}
      ></TextField>
      <TextField
        placeholder="Stop Loss"
        styled="homePage__textfield--3"
        onChange={changeStopLoss}
      ></TextField>
      <TextField
        placeholder="No. of Stocks"
        styled="homePage__textfield--4"
        onChange={changeNoOfStock}
      ></TextField>
    </div>
  );
}

export default App;
