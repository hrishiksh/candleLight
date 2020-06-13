import React from "react";
import "./Component.scss";

const Btn = (props) => {
  return (
    <button className={"btn " + props.styled} onClick={props.onClick}>
      Calculate
    </button>
  );
};

export default Btn;
