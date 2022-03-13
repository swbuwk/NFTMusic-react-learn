import React from 'react'
import "./ExplainSection.css"
import photo from "./img/photo.png"

const ExplainSection = () => {
  return (
    <section className='explain-section'>
        <div className='background-gradient'></div>
        <div className='text-block'>
            <h1>How do Music NFTs work?</h1>
            <h5>NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artistes get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</h5>
        </div>
        <img src={photo}></img>
    </section>
  )
}

export default ExplainSection