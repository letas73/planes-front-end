import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import Content from '../../components/Content/Content'
import Button from '../../components/Button/Button'
import Spinner from '../../components/Spinner/Spinner'
import './Plane.scss'
import { useEffect } from 'react'
import { getPlane } from '../../store/plane/planeSlice'

const Plane = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  
  const dispatch = useDispatch()
  const { plane, isLoading } = useSelector((state) => state.plane)

  useEffect(() => {
    dispatch(getPlane(id))
  }, [dispatch, id])
  
  if (isLoading) {
    return <Spinner />
  }

  return (
    <Content className='plane'>
      <div className="plane__cont">
        <Button onClick={() => navigate(-1)} isBackButton={true}>
          Назад
        </Button>
        <h1 className='plane__title'>
          {plane.name}
        </h1>
        <div className="plane__price">
          {plane.price}
        </div>
        <Button containerClassName='plane__buy' onClick={() => navigate('/order')}>
          Оформить заказ
        </Button>
        <p className="plane__descr">
          {plane.description}
        </p>
      </div>
      <div className="plane__right">
        <img src={plane.planeImage} alt="" className="plane__img" />
      </div>
    </Content>
  )
}

export default Plane