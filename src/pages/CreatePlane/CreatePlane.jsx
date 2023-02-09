import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Content from '../../components/Content/Content'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import './CreatePlane.scss'
import { useState } from 'react'
import { useCallback } from 'react'
import { createPlane } from '../../store/plane/planeSlice'

const CreatePlane = () => {
  const navigate = useNavigate()
  
  const dispatch = useDispatch()
  const {errors} = useSelector((state) => state.plane)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [capacity, setCapacity] = useState('')
  const [planeImage, setPlaneImage] = useState(null)

  const handleCreatePlane = useCallback(() => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('capacity', capacity)
    formData.append('planeImage', planeImage)

    dispatch(createPlane(formData)).then(res => {
      if (!res.error) {
        navigate(`/plane/${res.payload._id}`, {replace: true})
      }
    })
  }, [name, price, description, capacity, planeImage, dispatch, navigate])

  return (
    <Content className='create-plane'>
      <Button containerClassName='create-plane__back' onClick={() => navigate(-1)} isBackButton={true}>
        Назад
      </Button>
      <form action="/" className='create-plane__form'>
        <h1 className='create-plane__title'>Создать самолет</h1>
        <Input name="name" placeholder="Название самолета" onChange={(e) => setName(e.target.value)} error={errors && errors.name && errors.name.message} />
        <Input name="price" placeholder="цена самолета" onChange={(e) => setPrice(e.target.value)} error={errors && errors.price && errors.price.message} />
        <Input name="description" placeholder="описание самолета" onChange={(e) => setDescription(e.target.value)} error={errors && errors.description && errors.description.message} />
        <Input name="capacity" placeholder="вместимость самолета" onChange={(e) => setCapacity(e.target.value)} error={errors && errors.capacity && errors.capacity.message} />
        <Input type='file' name="planeImage" placeholder="Изображение самолета" onChange={(e) => setPlaneImage(e.target.files[0])} error={errors && errors.planeImage && errors.planeImage.message} />
        <Button containerClassName='create-plane__form-submit' onClick={handleCreatePlane}>
          Создать
        </Button>
      </form>
    </Content>
  )
}

export default CreatePlane