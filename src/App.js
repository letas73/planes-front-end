import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Plane from './pages/Plane/Plane';
import CreatePlane from './pages/CreatePlane/CreatePlane';
import Order from './pages/Order/Order';
import './scss/style.scss'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/plane/:id' element={<Plane />} />
      <Route path='/create-plane' element={<CreatePlane />} />
      <Route path='/order' element={<Order />} />
    </Routes>
  );
}

export default App;