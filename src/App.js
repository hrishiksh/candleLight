import React from "react";
import "./App.scss";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <HomePage></HomePage>

    // <div className="homePage">
    //   <Header styled="homePage__header"></Header>

    //   <InfoCard
    //     title="Fund"
    //     percent="100"
    //     price="123"
    //     bgcol="blue"
    //     styled="homePage__card-1"
    //   ></InfoCard>
    //   <InfoCard
    //     title="Profit"
    //     percent={profitPercent.toFixed(2)}
    //     price={profit.toFixed(2)}
    //     bgcol="green"
    //     styled="homePage__card-2"
    //   ></InfoCard>
    //   <InfoCard
    //     title="Loss"
    //     percent={lossPercent.toFixed(2)}
    //     price={loss.toFixed(2)}
    //     bgcol="red"
    //     styled="homePage__card-3"
    //   ></InfoCard>
    //   <HeadLine text="Calculator" styled="homePage__headline"></HeadLine>
    //   <TextField
    //     placeholder="Price"
    //     styled="homePage__textfield--1"
    //     onChange={changePrice}
    //   ></TextField>
    //   <TextField
    //     placeholder="Target"
    //     styled="homePage__textfield--2"
    //     onChange={changeTarget}
    //   ></TextField>
    //   <TextField
    //     placeholder="Stop Loss"
    //     styled="homePage__textfield--3"
    //     onChange={changeStopLoss}
    //   ></TextField>
    //   <TextField
    //     placeholder="No. of Stocks"
    //     styled="homePage__textfield--4"
    //     onChange={changeNoOfStock}
    //   ></TextField>
    //   <Btn styled="homePage__btn--up" bgcol="green" onClick={ChangeLong}>
    //     Long
    //   </Btn>
    //   <Btn styled="homePage__btn--down" bgcol="red" onClick={ChangeShort}>
    //     Short
    //   </Btn>
    //   <Btn
    //     styled="homePage__btn--submit"
    //     bgcol="green"
    //     onClick={grandCalculation}
    //   >
    //     Submit
    //   </Btn>
    // </div>
  );
}

export default App;
