import React, { useState, useEffect } from "react";
import axios from "axios";

import SelectCoin from "./../SelectCoin";

import "./CustomSelect.css";

const CustomSelect = ({ placeholder, handleChange, value, fieldName }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <select
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e, fieldName)}
      >
        {coins.map((coin) => {
          return <SelectCoin name={coin.name} image={coin.image} />;
        })}
      </select>
      );
    </>
  );
};

export default CustomSelect;
