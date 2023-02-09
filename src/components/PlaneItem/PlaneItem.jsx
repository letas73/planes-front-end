import React from 'react'
import { Link } from 'react-router-dom'
import './PlaneItem.scss'

const PlaneItem = ({ _id, name, price, description, planeImage, capacity }) => {
  return (
    <Link to={`/plane/${_id}`} className='plane-item'>
      <div className="plane-item__capacity">
        {capacity}
      </div>
      {planeImage && <img src={planeImage} alt='' className='plane-item__img' />}
      <div className="plane-item__info">
        <h2 className="plane-item__title">
          {name}
        </h2>
        <span className="plane-item__price">
          {price}
        </span>
      </div>
    </Link>
  )
}

export default PlaneItem