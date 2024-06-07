import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { signup, useAuth } from "../../firebase.js";
import "./signUp.css";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const currentUser = useAuth();

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    setError("");

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      setError("Пожалуйста, заполните все поля");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Пароль должен быть минимум 6 знаков");
      setLoading(false);
      return;
    }

    try {
      await signup(email, password);
      navigate("/");
    } catch {
      setError("Ошибка регистрации! Проверьте правильность данных.");
    }

    setLoading(false);
  }

  return (
    <div className="mainBlockAuth">
      {error && <p className="errorMessage">{error}</p>}
      <div className="authInputs">
        <input
          ref={emailRef}
          type="email"
          placeholder="Почта"
          required
        />
      </div>
      <div className="authInputs">
        <input
          ref={passwordRef}
          type="password"
          placeholder="Пароль"
          required
        />
      </div>
      <div className="authBtnSubmit">
        <button disabled={loading || currentUser} onClick={handleSignup} className="authBtn">
          Регистрация
        </button>
      </div>
    </div>
  );
};

export { SignUp };
