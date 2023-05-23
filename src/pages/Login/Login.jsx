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
    if (inputRef.current.value && passwordRef.current.value) {
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
          }else{
            throw new Error("Username or passwor error")
          }
        })

        .catch((err) => alert(err));
    }else{
      alert("Please, fill username and password")
    }
  }

  console.log(token);
  return (
    <div className="login">
      <form onSubmit={(e) => onSubmitFunction(e)}>
        <input
          placeholder="Username"
          ref={inputRef}
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="Password"
          ref={passwordRef}
          type="password"
          name=""
          id=""
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default Login;
