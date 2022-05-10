import React from "react";

import "./selectCoin.css";

const SelectCoin = ({ name, image }) => {
  return (
    <option>
      <img src={image} alt="crypto" />
      <h1>{name}</h1>
    </option>
  );
};

export default SelectCoin;
