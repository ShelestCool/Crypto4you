import React from "react";
import useAxios from "../../hooks/useAxios";

import "./CustomSelect.css";

const CustomSelect = ({ placeholder, handleChange, value, fieldName }) => {
  const { response: coins } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  return (
    <>
      <select
        className="notes-select"
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, fieldName)}
      >
        <option value="" hidden>
          Select Coin
        </option>
        {coins && coins.map((coin) => (
          <option key={coin.id} value={coin.name}>
            {coin.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;

