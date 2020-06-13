import React from "react";
import "./App.scss";
import Header from "./components/Header";
import HeadLine from "./components/HeadLine";
import TextField from "./components/TextField";
import InfoCard from "./components/InfoCard";
import Btn from "./components/Btn";

function App() {
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
        percent="2"
        price="123"
        bgcol="green"
        styled="homePage__card-2"
      ></InfoCard>
      <InfoCard
        title="Loss"
        percent="2"
        price="123"
        bgcol="red"
        styled="homePage__card-3"
      ></InfoCard>
      <HeadLine text="Calculator" styled="homePage__headline"></HeadLine>
      <TextField
        placeholder="Price"
        styled="homePage__textfield--1"
      ></TextField>
      <TextField
        placeholder="Target"
        styled="homePage__textfield--2"
      ></TextField>
      <TextField
        placeholder="Stop Loss"
        styled="homePage__textfield--3"
      ></TextField>
      <TextField
        placeholder="No. of Stocks"
        styled="homePage__textfield--4"
      ></TextField>
      <Btn styled="homePage__btn"></Btn>
    </div>
  );
}

export default App;
