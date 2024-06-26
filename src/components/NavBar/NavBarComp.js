import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useAuth, logout } from "../../firebase.js";

import { BsBoxArrowRight } from "react-icons/bs";

import BitcoinImg from "../../img/Bitcoin.png";
import "./style.css";

function NavBarComp() {
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Ошибка!");
    }
    setLoading(false);
  }

  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="titleNav">
          <img src={BitcoinImg} alt="bitcoin" className="bitcoinImg" />
          Blockchain
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/news" className="linkNav">
              Новости
            </Nav.Link>

            <NavDropdown
              title="Инструменты"
              id="basic-nav-dropdown"
              className="linkNav"
            >
              <NavDropdown.Item as={Link} to="/cryptonotes">
                Крипто Заметки
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cryptocurrency">
                Курсы криптовалют
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Новичкам"
              id="basic-nav-dropdown"
              className="linkNav"
            >
              <NavDropdown.Item as={Link} to="/whatisblockchain">
                Что такое BlockChain?
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/whatisbitcoin">
                Что такое Bitcoin?
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/altcoins">
                Альткоины
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nft-tokens">
                NFT-токены
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cryptowallet">
                Как открыть криптокошелек
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" className="linkNav">
              О нас
            </Nav.Link>
          </Nav>
          {currentUser ? (
            <div className="logOutButton">
              <div>
              <Nav.Link as={Link} to="/account">
                <p className="emailLogOut">{currentUser?.email}</p>
              </Nav.Link>
              </div>
              <BsBoxArrowRight
                disabled={loading || !currentUser}
                onClick={handleLogout}
                className="iconLogOut"
              />
            </div>
          ) : (
            <div className="authNavButtons">
              <Nav.Link as={Link} to="/login">
                <Button variant="outline-secondary">Вход</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <Button variant="warning">Регистрация</Button>
              </Nav.Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
