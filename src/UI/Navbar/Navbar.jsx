import React from 'react'
import "./style.css";
const Navbar = ({img, text}) => {
  return (
    <div className='side_nav'>
      {img}
      <p>{text}</p>
    </div>
  )
}

export default Navbar