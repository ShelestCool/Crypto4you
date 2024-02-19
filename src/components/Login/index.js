import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import { login, useAuth } from "../../firebase.js";

import "./login.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      alert("Authorisation Error!");
    }
    setLoading(false);
  }

  return (
    <div className="mainBlockAuth">
      <div className="authInputs">
        <input ref={emailRef} type="email" placeholder="Email" />
      </div>
      <div className="authInputs">
        <input ref={passwordRef} type="password" placeholder="password" />
      </div>
      <div className="authBtnSubmit">
        <button
          disabled={loading || currentUser}
          onClick={handleLogin}
          className="authBtn"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export { Login };
