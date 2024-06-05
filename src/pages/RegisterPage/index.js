import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SignUp } from "../../components/SignUp";

import { BsBook } from "react-icons/bs";

import "./registerPage.css";

const RegisterPage = () => {
  return (
    <Container>
      <div className="RegPage">
        <h1>
          Регистрация
          <BsBook className="m-2" />
        </h1>
        <SignUp />
        <p align="center">
          У вас уже есть аккаунт? <Link to="/Login">Вход</Link>
        </p>
      </div>
    </Container>
  );
};

export default RegisterPage;
