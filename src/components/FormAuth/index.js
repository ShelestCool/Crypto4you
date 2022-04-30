import { useState } from "react";

import "./formAuth.css";

const FormAuth = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="mainBlockAuth">
      <div className="authInputs">
        <input
          type="email"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
      </div>
      <div className="authInputs">
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
          required
        />
      </div>
      <div className="authBtnSubmit">
        <button onClick={() => handleClick(email, pass)} className="authBtn">
          {title}
        </button>
      </div>
    </div>
  );
};

export { FormAuth };
