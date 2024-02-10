import React from "react";
import "./CustomButton.css";

const CustomButton = ({
  label,
  type,
  disabled = false,
  handleClick,
  classNames,
  data,
}) => {
  return (
    <div className="custBtn">
      <button
        className={classNames}
        onClick={(e) => handleClick(e, data)}
        type={type}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
