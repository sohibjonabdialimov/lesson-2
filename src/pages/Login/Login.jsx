import React, { useContext, useRef } from "react";
import { TokenContext } from "../../context/Token";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Login = () => {
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  const inputRef = useRef();
  const passwordRef = useRef();
  const onSubmitFunction = (e) => {
    e.preventDefault();

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: inputRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data.status === 200) {
          setToken(data.data);
          navigate("/");
          localStorage.setItem("token", JSON.stringify(data.data));
        }
      })

      .catch((err) => console.log(err));
  };

  console.log(token);
  return (
    <div className="login">
      <form onSubmit={(e) => onSubmitFunction(e)}>
        <input ref={inputRef} type="text" name="" id="" />
        <input ref={passwordRef} type="password" name="" id="" />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default Login;