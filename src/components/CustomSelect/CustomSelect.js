import React from "react";
import Select from "react-select";
import useAxios from "../../hooks/useAxios";

import "./CustomSelect.css";

const CustomSelect = ({ placeholder, handleChange, value, fieldName }) => {
  const { response: coins } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  const handleSelectChange = (selectedOption) => {
    handleChange({ target: { value: selectedOption ? selectedOption.value : '' } }, fieldName);
  };

  const options = coins ? coins.map((coin) => ({
    value: coin.name,
    label: coin.name
  })) : [];

  return (
    <Select
      className="notes-select"
      value={options.find(option => option.value === value)}
      onChange={handleSelectChange}
      options={options}
      placeholder={placeholder || "Выбрать монету"}
      isClearable
      noOptionsMessage={() => "Монета не найдена"}
    />
  );
};

export default CustomSelect;
