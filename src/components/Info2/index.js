import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

import whatBlockChain from "../../img/blockchain.jpeg";

export const Info2 = () => {
  return (
    <Container className="mainBlockHome3">
      <Row className="rowWhat">
        <Col className="colImgWhat">
          <img src={whatBlockChain} className="imgWhatCrypto" alt="what img" />
        </Col>

        <Col>
          <h3>Что такое Blockchain?</h3>
          <p className="pt-3">
            Блокчейн (Blockchain) — выстроенная по определённым правилам
            непрерывная последовательная цепочка блоков, содержащих информацию.
            Чаще всего копии цепочек блоков хранятся на множестве разных
            компьютеров независимо друг от друга.
          </p>
          <p>Подробнее можно почитать в разделе Новичкам.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Info2;
