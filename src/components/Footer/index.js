import * as React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import pay from "../../img/pay.png";
import bitcoin from "../../img/Bitcoin.png"

import "./style.css";

const Footer = () => {
    return (
        <div className='divFooter'>
            <Container>
                <Row>
                    <Col className='col1Footer'>
                        <img src={bitcoin} className="logo-footer" alt="bitcoin"/>
                        <p className="company">© 2021, Crypto4you</p>
                        <p className="company2">
                            Договор публичной оферты (физ. лица)<br/>
                            Договор публичной оферты (юр. лица)<br/>
                            Правила оплаты, безопасность платежей
                        </p>
                    </Col>
                    <Col className='col2Footer'>
                    <p className="heading-footer">Контакты</p>
                    <p className="contacts-footer">
                        +375 29 105-59-59<br/>
                        +375 29 305-59-59<br/>
                        info@crypto4you.by
                    </p>
                    </Col>

                    <div id="footer-block2">
                        <img src={pay} className="pay" alt="pay"/>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;
