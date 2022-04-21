import * as React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { BsFillEnvelopeFill } from "react-icons/bs";

import bitcoin from "../../img/Bitcoin.png"

import "./footer.css";

const Footer = () => {
    return (
        <div className='divFooter'>
            <Container className="mainBlockFooter">
                <Row>
                    <Col className='col1Footer'>
                        <div>
                            <p>По стратегическому партнерству и техническим вопросам</p>
                            <p className="contactsMails"><BsFillEnvelopeFill className="iconMail"/> admin@crypto4you</p>
                        </div>
                    </Col>
                    <Col className='col2Footer'>
                        <div>
                            <p>По информационному партнерству, размещению рекламных статей, новостей и пресс-релизов</p>
                            <p className="contactsMails"><BsFillEnvelopeFill className="iconMail"/> content@crypto4you</p>
                        </div>
                    </Col>
                    <Col className='col3Footer'>
                        <div>
                            <p>По вопросам размещения баннеров и рекламы на форуме</p>
                            <p className="contactsMails"><BsFillEnvelopeFill className="iconMail"/> contacts@crypto4you</p>
                        </div>
                    </Col>
                </Row>

                <div className="col4Footer">
                    <img src={bitcoin} className="logo-footer" alt="bitcoin"/>
                    <p>© 2022, Crypto4you</p>
                </div>
                <div className="col5Footer">
                    <p>Адрес для добровольных пожертвований на развитие - <br/>1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee (QR)</p>
                </div>
            </Container>
        </div>
    );
}
export default Footer;
