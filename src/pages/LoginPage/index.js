import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Login } from "../../components/Login";
import { BsBoxArrowInRight } from "react-icons/bs";

import "./logInPage.css";

const LoginPage = () => {
  return (
    <Container>
      <div className="logInPage">
        <h1>
          Авторизация
          <BsBoxArrowInRight className="m-2" />
        </h1>
        <Login />
        <p align="center">
          У вас нет аккаунта? <Link to="/register">Регистрация</Link>
        </p>
      </div>
    </Container>
  );
};

export default LoginPage;
