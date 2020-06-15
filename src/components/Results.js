import React from "react";
import "./Components.scss";

const Result = (props) => {
  return (
    <section className={"result " + props.styled}>
      <div className="result__profit">
        <h3 className="result__title">Profit (2.4%)</h3>
        <h2 className="result__number">₹{props.profit ?? 0}</h2>
      </div>
      <div className="result__loss">
        <h3 className="result__title">Loss (0.2%)</h3>
        <h2 className="result__number">₹{props.loss ?? 0}</h2>
      </div>
    </section>
  );
};

export default Result;
