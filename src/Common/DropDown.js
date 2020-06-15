import React from "react";

const DropDown = (props) => {
  return (
    <div className={"dropdown " + props.styled}>
      <label htmlFor="dropdown" className="dropdown__label">
        Long/Short
      </label>
      <select
        name=""
        id="dropdown"
        className="dropdown__select"
        onChange={props.onChange}
        value={props.value}
      >
        <option value="Long" className="dropdown__select--1">
          Long
        </option>
        <option value="Short" className="dropdown__select--1">
          Short
        </option>
      </select>
    </div>
  );
};

export default DropDown;
