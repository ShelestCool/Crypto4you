import React from "react";

import { Container, Row, Col} from 'react-bootstrap';

import "./style.css";

import whyCrypto from "../../img/fon1.png";


export const Info = () => {

  return (
    <Container className="mainBlockHome">
      <Row className="rowWhy">
        <Col>
        <h3>Почему криптовалюта это актив будущего?</h3>
        <p className="pt-3">Криптовалюту на сегодняшний день можно смело назвать «активами будущего», так как она имеет многочисленные явные преимущества перед фиатной денежной системой. Способы применения криптовалюты многочисленны и их становится больше по мере развития цифровой экономики.</p>
        </Col>
        <Col className="colImgWhy">
          <img src={whyCrypto} className="imgWhyCrypto" alt="why img"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
