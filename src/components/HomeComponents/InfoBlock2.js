import { Container } from "react-bootstrap";

import "./style.css";

export const AddInfo = () => {
  return (
    <div>
      <div className="div-content">
        <div className="Add-Info-overlay"></div>
        <Container>
          <h3 className="text-part3">
            <i>
              «Блокчейн — это технология. Биткоин — это просто первое глобальное
              проявление ее потенциала»
            </i>
          </h3>
        </Container>
      </div>
    </div>
  );
};

export default AddInfo;
