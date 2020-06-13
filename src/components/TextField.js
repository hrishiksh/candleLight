import React from "react";
import "./Component.scss";

const TextField = (props) => {
  return (
    <input
      onChange={props.onChange}
      type="tel"
      name=""
      id="intput"
      className={"textfield " + props.styled}
      placeholder={props.placeholder}
    />
  );
};

export default TextField;
