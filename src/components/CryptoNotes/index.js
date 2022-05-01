import { Table } from "react-bootstrap";

import "./cryptoNotes.css";

const CryptoNotes = () => {
  return (
    <div>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CryptoNotes;
