import React, { useState, useEffect } from "react";
import axios from "axios";

import { Table } from "react-bootstrap";

import EditButton from "../EditButton/EditButton";

const CustomTable = ({ users, handleEditClick, handleRemoveClick }) => {
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
    <Table striped bordered hover className="cryptoTable">
      <thead>
        <tr>
          <th>№</th>
          <th>Криптовалюта</th>
          <th>Цена покупки</th>
          <th>Количество</th>
          <th>Потрачено</th>
          <th>Курс</th>
          <th>Итого на балансе</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{user.cryptoName}</td>
            <td>{user.cryptoPrice}</td>
            <td>{user.cryptoAmount}</td>
            <td>{user.cryptoPrice * user.cryptoAmount + " "}$</td>
            <td>
              {coins
                .filter((coin) => user.cryptoName === coin.id)
                .map((coin) => coin.current_price) + " "}
              $
            </td>
            <td>
              {Math.floor(
                user.cryptoAmount *
                  coins
                    .filter((coin) => user.cryptoName === coin.id)
                    .map((coin) => coin.current_price) *
                  100
              ) /
                100 +
                " "}
              $
            </td>
            <td>
              <div>
                <EditButton
                  label="Изменить"
                  classNames="edit-ection"
                  handleClick={handleEditClick}
                  data={{ index, user }}
                  type="button"
                />

                <EditButton
                  label="Удалить"
                  classNames="remove-action"
                  handleClick={handleRemoveClick}
                  data={{ index }}
                  type="button"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
