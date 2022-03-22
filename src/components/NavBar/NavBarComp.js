import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";

import BitcoinImg from "../../img/Bitcoin.png";
import "./style.css";

function NavBarComp() {
        return (
                <Navbar bg="dark" variant={"dark"} expand="lg"  >
                    <Container>
                        <Navbar.Brand as={Link} to="/" className="titleNav"><img src={BitcoinImg} alt="bitcoin" className="bitcoinImg"/>CryptoForYou</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link as={Link} to="/news">Новости</Nav.Link>

                            <NavDropdown title="Инструменты" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Крипто Заметки</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/converter">Конвертер и курсы криптовалют</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Новичкам" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/whatisbitcoin">Что такое Bitcoin?</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Bitcoin FAQ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">FAQ по майнингу</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Альткоины</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Мифы о Bitcoin</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Словарь</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={Link} to="/about">О нас</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        );
}

export default NavBarComp;