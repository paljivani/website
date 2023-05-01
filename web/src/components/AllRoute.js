import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Details from './Details';
import Home from './Home';
import Product from './Product';
import Signup from './Signup';
function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default AllRoute;