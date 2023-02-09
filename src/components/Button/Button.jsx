import React from 'react'
import './Button.scss'

const Button = ({
  containerClassName = '',
  className = '',
  onClick = () => null,
  children = '',
  isBackButton = false
}) => {
  return (
    <div className={containerClassName} onClick={onClick}>
      <span className={`${isBackButton ? 'back-button' : 'button'} ${className}`}>{children}</span>
    </div>
  )
}

export default Button