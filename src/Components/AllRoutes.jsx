import React from 'react'
import {
    Routes,
    Route,
  
  } from "react-router-dom";
import Product_Container from './ProductPage/Product_Container';
import Home from '../Pages/Home';
import ProductInterface from '../Pages/ProductInterface';
function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/productContainer' element= {<Product_Container/>} />
        <Route path='/productInterface/:Cid' element= {<ProductInterface/>} />
    </Routes>
  )
}

export default AllRoutes