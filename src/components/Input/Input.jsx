import React from 'react'
import './Input.scss'

const Input = ({
  type = 'text',
  name,
  containerClassName,
  placeholder,
  onChange = () => null,
  error = ''
}) => {
  return (
    <div className={`container ${containerClassName}`}>
      <input type={type} name={name} className='input' placeholder={placeholder} onChange={onChange} />
      {error && <span className='error'>{error}</span>}
    </div>
  )
}

export default Input