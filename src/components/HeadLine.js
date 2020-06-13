import React from "react";
import "./Component.scss";

const Headline = (props) => {
  return (
    <div className={"headline " + props.styled}>
      <h1 className="headline__text">{props.text}</h1>
    </div>
  );
};

export default Headline;
