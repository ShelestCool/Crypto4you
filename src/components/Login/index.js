import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import { login, useAuth } from "../../firebase.js";
import "./login.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const currentUser = useAuth();

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    setError("");

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      setError("Пожалуйста, заполните все поля");
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
      navigate("/");
    } catch {
      setError("Ошибка авторизации! Проверьте правильность данных.");
    }

    setLoading(false);
  }

  return (
    <div className="mainBlockAuth">
      <div className="authInputs">
        <input ref={emailRef} type="email" placeholder="Почта" required />
      </div>
      <div className="authInputs">
        <input ref={passwordRef} type="password" placeholder="Пароль" required />
      </div>
      {error && <p className="errorMessage">{error}</p>}
      <div className="authBtnSubmit">
        <button
          disabled={loading || currentUser}
          onClick={handleLogin}
          className="authBtn"
        >
          Вход
        </button>
      </div>
    </div>
  );
};

export { Login };
