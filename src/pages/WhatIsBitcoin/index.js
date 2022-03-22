import { Container } from "react-bootstrap";

import btc from "../../img/btc.jpeg";

import "./style.css";

const WhatIsBitcoin = () => {
    return (
        <Container>
            <h2>Что такое Биткоин?</h2>
            <img src={btc} alt="btc" className="conteinerInfo"/>
            <p></p>
        </Container>
    )
}

export default WhatIsBitcoin;