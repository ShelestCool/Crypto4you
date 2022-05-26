import React from "react";
import "./EditButton.css";

const EditButton = ({
  label,
  type,
  disabled = false,
  handleClick,
  classNames,
  data,
}) => {
  return (
    <div className="editBtn">
      <button
        className={classNames}
        onClick={() => handleClick(data)}
        type={type}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default EditButton;
