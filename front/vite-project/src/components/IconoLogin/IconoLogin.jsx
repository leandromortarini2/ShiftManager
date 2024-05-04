/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import style from "./IconoLogin.module.css";
import { useState } from "react";

const LoginButton = () => {
  const [LoginState, setLoginState] = useState(false);

  const handleLogin = (event) => {
    setLoginState(!LoginState);
  };
  return (
    <>
      <button className={style.buttonImg} onClick={handleLogin}>
        <img
          src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png"
          alt=""
        />
      </button>
      <div
        className={style.boxButtons}
        style={{ display: LoginState ? "block" : "none" }}
      >
        <Link to={"/Login"}>
          <button className={style.ButtonLogin}>Login</button>
        </Link>
        {/*  */}
        {/*  */}
        <Link to="/Register">
          <button className={style.ButtonLogin}>Register</button>
        </Link>
      </div>
    </>
  );
};

export default LoginButton;
