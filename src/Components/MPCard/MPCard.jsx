import React from 'react'
import "./MPCard.css"
import logo from "./img/logo.svg"

const MPCard = ({children, src, price, ...other}) => {
  return (
    <div className="mp-card">
        <img src={src}></img>
        <div className='mp-card-border'>
            <div className='up'></div>
            <div className='down'></div>
            <div className='left'></div>
            <div className='right'></div>
            <div className='info'>
                <span>{children}</span>
                <div className='price'>
                    <div>
                      <img src={logo}></img>
                      <span>{price}</span>
                    </div>
                    <div className='underline'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MPCard