import React, { useContext } from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { EachContext, NavContext } from "../../context/NavContext";
const Button = ({ img, type }) => {
  const navigate = useNavigate();
  const { setNav } = useContext(NavContext);
  const { setEach } = useContext(EachContext);
  const handleNav = () => {
    if (type === "header") {
      setNav((prev) => !prev);
    }
    if (type === "each") {
      setEach(false);
    } else if (type === "user") {
      navigate("/glavniy");
    } else {
      setEach((prev) => true);
    }
  };
  return (
    <button onClick={() => handleNav()} className="btn">
      {img}
    </button>
  );
};

export default Button;
