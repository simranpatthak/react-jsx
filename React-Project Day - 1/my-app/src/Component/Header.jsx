import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Header = () => {
  return (
    <div className='head'>
       <div className="header">
        <h1> Faces Canada</h1>
        </div>
  <div className="head2">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
  </div>

  <div className="head3">
  <FaFacebook />
  <FaTwitter />
  <FaInstagramSquare />
  </div>
      
    </div>
  )
}

export default Header
