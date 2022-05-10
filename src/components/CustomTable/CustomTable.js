import React from "react";
import { Table } from "react-bootstrap";

import CustomButton from "../CustomButton/CustomButton";
import "./CustomTable.css";

const CustomTable = ({ users, handleEditClick, handleRemoveClick }) => {
  return (
    <Table striped bordered hover className="cryptoTable">
      <thead>
        <tr>
          <th>№</th>
          <th>Криптовалюта</th>
          <th>Цена покупки</th>
          <th>Количество</th>
          <th>Курс</th>
          <th>Итого</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{user.cryptoName}</td>
            <td>{user.cryptoPrice}</td>
            <td>{user.cryptoAmount}</td>
            <td>{user.cryptoRate}</td>
            <td>Итого</td>
            <td>
              <div>
                <CustomButton
                  label="edit"
                  classNames="edit-ection"
                  handleClick={handleEditClick}
                  data={{ index, user }}
                  type="button"
                />

                <CustomButton
                  label="remove"
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
