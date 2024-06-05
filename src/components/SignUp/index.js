import { useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";

import "./signUp.css";

import { signup, useAuth} from "../../firebase.js";

const SignUp = () => {
  const [ loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      alert("Registration Error!")
    }
    setLoading(false);
  }

  return (
    <div className="mainBlockAuth">
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
