import React from "react";
import "./CustomButton.css";

const CustomButton = ({
  label,
  type,
  disabled = false,
  handleClick,
  classNames,
  data,
  color = "orange",
  width = "90%",
  height = "auto",
  fontSize = "18px"
}) => {
  return (
    <div className="custBtn">
      <button
        className={classNames}
        onClick={(e) => handleClick(e, data)}
        type={type}
        disabled={disabled}
        style={{ backgroundColor: color, width: width, fontSize: fontSize, height: height}}
      >
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
