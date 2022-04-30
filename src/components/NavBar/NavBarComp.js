import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../store/slices/userSlice";

import { BsBoxArrowRight } from "react-icons/bs";

import BitcoinImg from "../../img/Bitcoin.png";
import "./style.css";

function NavBarComp() {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="titleNav">
          <img src={BitcoinImg} alt="bitcoin" className="bitcoinImg" />
          CryptoForYou
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
              <NavDropdown.Item as={Link} to="/converter">
                Конвертер и курсы криптовалют
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Новичкам"
              id="basic-nav-dropdown"
              className="linkNav"
            >
              <NavDropdown.Item as={Link} to="/whatisbitcoin">
                Что такое Bitcoin?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bitcoin FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                FAQ по майнингу
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/altcoins">
                Альткоины
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Мифы о Bitcoin
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about" className="linkNav">
              О нас
            </Nav.Link>
          </Nav>
          <div className="logOutButton">
            <div>
              <p className="emailLogOut">{email}</p>
            </div>
            <BsBoxArrowRight
              onClick={() => dispatch(removeUser())}
              className="iconLogOut"
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="titleNav">
          <img src={BitcoinImg} alt="bitcoin" className="bitcoinImg" />
          CryptoForYou
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
              <NavDropdown.Item as={Link} to="/converter">
                Конвертер и курсы криптовалют
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Новичкам"
              id="basic-nav-dropdown"
              className="linkNav"
            >
              <NavDropdown.Item as={Link} to="/whatisbitcoin">
                Что такое Bitcoin?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bitcoin FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                FAQ по майнингу
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/altcoins">
                Альткоины
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Мифы о Bitcoin
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about" className="linkNav">
              О нас
            </Nav.Link>
          </Nav>
          <div className="authNavButtons">
            <Nav.Link as={Link} to="/login">
              <Button variant="outline-secondary">Log In</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              <Button variant="warning">JOIN</Button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
