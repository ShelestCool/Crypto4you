import React from "react";
import "./CustomInput.css";

const CustomInput = ({ placeholder, handleChange, value, fieldName }) => {
  return (
    <input
      className="notes-input"
      placeholder={placeholder}
      onChange={(e) => handleChange(e, fieldName)}
      value={value}
      type="number"
    />
  );
};

export default CustomInput;
