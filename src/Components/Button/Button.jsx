import React from 'react'
import "./Button.css"

const Button = ({children, ...other}) => {
  

  return (
    <div className='button' {...other}>
        <div className='button-bg'></div>
        <span>{children}</span>
    </div>
  )
}

export default Button