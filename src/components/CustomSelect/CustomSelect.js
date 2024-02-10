import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CustomSelect.css";

const CustomSelect = ({ placeholder, handleChange, value, fieldName }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
        {coins.map((coin) => (
          <option key={coin.id} value={coin.name}>
            {coin.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
