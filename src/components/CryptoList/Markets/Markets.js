import React, { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import Coin from "../Coin/Coin";
import Skeleton from "../../Skeleton";

import "./markets.css";
import CustomInput from "../../CustomInput/CustomInput";

const Markets = () => {
  const { response, loading, error } = useAxios(
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const [hasError, setHasError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    if (error) {
      setHasError(true);
    }
  }, [error]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setFilterOption(""); // Сбросить фильтр при изменении поискового запроса
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  if (loading || hasError || !response) {
    return (
      <>
      <div className="wrapper-container">
      <Skeleton className="smallBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
      </div>
      </>
    );
  }

  // Фильтрация монет по поисковому запросу
  const filteredCoins = response.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Применение фильтрации, если установлен фильтр
  let filteredAndSortedCoins = filteredCoins;
  if (filterOption === "maxPrice") {
    // Сортировка по максимальной цене
    filteredAndSortedCoins = filteredCoins.sort((a, b) => b.current_price - a.current_price);
  } else if (filterOption === "minPrice") {
    // Сортировка по минимальному процентному росту
    filteredAndSortedCoins = filteredCoins.sort((a, b) => a.current_price - b.current_price);
  } else if (filterOption === "maxChange") {
    // Сортировка по максимальному процентному росту
    filteredAndSortedCoins = filteredCoins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
  } else if (filterOption === "minChange") {
    // Сортировка по худшему показателю роста
    filteredAndSortedCoins = filteredCoins.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
  }

  return (
    <section className="market">
      <h1 className="title">Криптовалюты</h1>

      <div className="filter-bar">
        <CustomInput 
          type="text"
          width="270px"
          height="40px"
          placeholder="Поиск монеты"
          value={searchTerm}
          handleChange={handleSearchChange}
        />
        <select value={filterOption} onChange={handleFilterChange} className="selectFilterCoin">
          <option value="">Без сортировки</option>
          <option value="maxPrice">Самая высокая цена</option>
          <option value="minPrice">Самая низкая цена</option>
          <option value="maxChange">Максимальный процентный рост</option>
          <option value="minChange">Минимальный процентный рост</option>
        </select>
      </div>

      {filteredAndSortedCoins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </section>
  );
};

export default Markets;

