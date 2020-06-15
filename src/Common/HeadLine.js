import React from "react";
import "./Common.scss";

const Headline = (props) => {
  return (
    <div className={"headline " + props.styled}>
      <h1 className="headline__text">{props.children}</h1>
    </div>
  );
};

export default Headline;
