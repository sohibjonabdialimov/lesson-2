import React from 'react'
import "./style.css";
const Button = ({img, setNav}) => {
  const handleNav = () => {
    setNav(prev => !prev);
  }
  return (
    <button onClick={() => handleNav()} className = "btn">
      {img}
    </button>
  )
}

export default Button