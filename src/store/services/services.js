import axios from '../../utils/axios'

const getPlanes = async () => {
  const { data } = await axios.get('/api/planes')
  return data
} 

const getPlane = async (id) => {
  const { data } = await axios.get(`/api/planes/${id}`)
  return data
}

const createPlane = async (planeData) => {
  const { data } = await axios.post('/api/planes', planeData)
  return data
}

const services = {
  getPlanes,
  getPlane,
  createPlane
}

export default services