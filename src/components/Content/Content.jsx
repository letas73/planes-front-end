import React from 'react'
import './Content.scss'

const Content = ({ children, className='' }) => {
  return (
    <div className={`content-wrapper ${className}`}>
      {children}
    </div>
  )
}

export default Content