import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSortPlanes } from '../../hooks/useSortPlanes'
import { getPlanes } from '../../store/planes/planesSlice'
import Button from '../Button/Button'
import Content from '../Content/Content'
import PlaneItem from '../PlaneItem/PlaneItem'
import Spinner from '../Spinner/Spinner'
import './Planes.scss'

const Planes = () => {
  const dispatch = useDispatch()
  const { planes, isLoading } = useSelector((state) => state.planes)

  const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlanes(planes || [])


  useEffect(() => {
    dispatch(getPlanes())
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <div className='planes'>
        <div className="planes__sort">
          <Content className='planes__sort-container'>
            <Button className='planes__sort-btn' onClick={() => setIsDescSort(!isDescSort)}>
              сортировать по цене {`${isDescSort ? "+" : "-"}`}
            </Button>
            <Link to='/create-plane' className='planes__sort-link'>
              Добавить самолет
            </Link>
          </Content>
        </div>
        <Content className='planes__grid'>
          {
            sortedPlanes && sortedPlanes.map((plane) => (
              <PlaneItem key={plane._id} {...plane} />
            ))
          }
        </Content>
      </div>
    </div>
  )
}

export default Planes