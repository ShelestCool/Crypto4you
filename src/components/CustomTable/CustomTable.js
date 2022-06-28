import React, { useState, useEffect } from "react";
import axios from "axios";

import { Table } from "react-bootstrap";

import EditButton from "../EditButton/EditButton";

const CustomTable = ({ notes, handleEditClick, handleRemoveClick}) => {
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

  // const cryptoSpent = 
  // const cryptoRate = 
  // const cryptoTotal = 

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
        {notes.map((note, index) => (
          <tr key={note.id}>
            <td>{index + 1}</td>
            <td>{note.name}</td>
            <td>{note.price}</td>
            <td>{note.amount}</td>
            <td>{note.price * note.amount + " "}$</td>
            <td>
              {coins
                .filter((coin) => note.name === coin.id)
                .map((coin) => coin.current_price) + " "}
              $
            </td>
            <td>
              {Math.floor(
                note.amount *
                  coins
                    .filter((coin) => note.name === coin.id)
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
                  handleClick={() => handleEditClick(note.id)}
                  data={{ index, note }}
                  type="button"
                />

                <EditButton
                  label="Удалить"
                  classNames="remove-action"
                  handleClick={() => handleRemoveClick(note.id)}
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
