import React from 'react'
import "./style.css";
import { useLocation } from 'react-router-dom';
const Button = ({img, setNav, setEach}) => {
  const location = useLocation();
  console.log();
  const handleNav = () => {
    setNav(prev => !prev);
    if(location.pathname.split("/")[1] === "videolar"){
      setEach(prev => !prev);
    }
  }
  return (
    <button onClick={() => handleNav()} className = "btn">
      {img}
    </button>
  )
}

export default Button