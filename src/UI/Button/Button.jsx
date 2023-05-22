import React, { useContext } from 'react'
import "./style.css";
import { useLocation } from 'react-router-dom';
import { EachContext, NavContext } from '../../context/NavContext';
const Button = ({img, type}) => {
  const {setNav} = useContext(NavContext);
  const {setEach} = useContext(EachContext);
  const location = useLocation();
  const handleNav = () => {
    if(type === "header"){
      setNav(prev => !prev);
    }
    if(type === "each"){
      setEach(false);
    }else{
      setEach(prev => true);
    }

    // if(location.pathname.split("/")[1] === "videolar"){
    //   setEach(prev => true);
    // }
  }
  return (
    <button onClick={() => handleNav()} className = "btn">
      {img}
    </button>
  )
}

export default Button