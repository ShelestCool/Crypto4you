import React from "react";
import { Carousel } from "react-bootstrap";

import "./style.css";

import slider1 from "../../img/homePage/slider1.png";
import slider2 from "../../img/homePage/slider2.jpeg";
import slider3 from "../../img/homePage/slider3.jpeg";
import slider4 from "../../img/homePage/slider4.jpeg";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item className="styleSlide">
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="titleCrypto">Bitcoin</h3>
          <p className="textCrypto">Основная криптомонета.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="styleSlide">
        <img className="d-block w-100" src={slider2} alt="First slide" />
        <Carousel.Caption>
          <h3 className="titleCrypto">Ethereum</h3>
          <p className="textCrypto">Основная криптомонета.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="styleSlide">
        <img className="d-block w-100" src={slider3} alt="First slide" />
        <Carousel.Caption>
          <h3 className="titleCrypto">XRP</h3>
          <p className="textCrypto">Основная криптомонета.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="styleSlide">
        <img className="d-block w-100" src={slider4} alt="First slide" />
        <Carousel.Caption>
          <h3 className="titleCrypto">LiteCoin</h3>
          <p className="textCrypto">Основная криптомонета.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
