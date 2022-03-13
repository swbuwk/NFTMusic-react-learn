import React from 'react'
import Button from '../Button/Button'
import MPCard from '../MPCard/MPCard'
import "./MarketplaceSection.css"
import pic1 from "./img/pic1.png"
import pic2 from "./img/pic2.png"
import pic3 from "./img/pic3.png"
import pic4 from "./img/pic4.png"

const MarketplaceSection = () => {
  return (
    <section className='mp-section'>
        <div className='mp-cards'>
            <MPCard src={pic1} price={0.2435}>4 pink boyz</MPCard>
            <MPCard src={pic2} price={0.6743}>Cool man singin'</MPCard>
            <MPCard src={pic3} price={0.2013}>Chill out</MPCard>
            <MPCard src={pic4} price={1.9332}>Demasia</MPCard>
        </div>
        <div className='info'>
        <h1>Music NFT Marketplace</h1>
        <h5>Create your first music NFTs with NFT market for musicians. Create music and music videos just under the $1, the platform works with BSC blockchain and supports mp4. With AirNFTs, you are getting the control over your NFTs, no middle man cutting your sales. Create, Buy, Sell and Earn with your music NFTs.</h5>
        <Button>Explore Marketplace</Button>
        </div>
        
    </section>
  )
}

export default MarketplaceSection