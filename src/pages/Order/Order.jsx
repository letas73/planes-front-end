import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Content from '../../components/Content/Content'
import './Order.scss'

const Order = () => {
  const navigate = useNavigate()

  return (
    <Content className='order'>
      <h1 className="order__title">
        Ваш заказ будет доставлен в ближайшее время
      </h1>
      <Button containerClassName='order__btn' onClick={() => navigate('/')}>
        На главную
      </Button>
    </Content>
  )
}

export default Order