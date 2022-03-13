import React from 'react'
import NavBar from '../NavBar/NavBar'
import bgGradient from "./img/bg-gradient.png" 
import hand from "./img/hand.png" 
import poweredBy from "./img/powered-by.png"
import Button from '../Button/Button'
import "./Header.css"

const Header = () => {
  return (
    <header>
        <img src={bgGradient}></img>
        <img src={hand} className="hand"></img>
        <div className='hero-section'>
            <h1>Music for NFT creators.</h1>
            <h2>Digital Music for fans.</h2>
            <h4>Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers. </h4>
            <div className='discover-block'>
                <img src={poweredBy}></img>
                <Button>Discover More</Button>
            </div>
        </div>
    </header>
  )
}

export default Header