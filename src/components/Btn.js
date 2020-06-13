import React from "react";
import "./Component.scss";

const Btn = (props) => {
  return <button className={"btn " + props.styled}>Calculate</button>;
};

export default Btn;
