import React from 'react'
import "./NavBar.css"
import facebookLogo from "./img/facebook.png"
import twitterLogo from "./img/twitter.png"
import mediumLogo from "./img/medium.png"


const NavBar = () => {
  return (
    <div className="navbar">
      <div className='nav-container'>
        <div className='nav-text'><b>Music</b><br/>NFT Platform</div>
        <ul className='nav-options'>
          <li>Marketplace<div className='underline'></div></li>
          <li>About<div className='underline'></div></li>
          <li>Resources<div className='underline'></div></li>
          <li>FAQ<div className='underline'></div></li>
        </ul>
        <div className="contact">
          <img src={facebookLogo}></img>
          <img src={twitterLogo}></img>
          <img src={mediumLogo}></img>
        </div>
      </div>
      <div className='nav-line'></div>
    </div>
  )
}

export default NavBar