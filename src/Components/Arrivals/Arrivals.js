import React from 'react'
import './Arrivals.css'
import LatestArrivalsSlider from '../Carousel/LatestArrivalsSlider'
import { Link } from 'react-router-dom'

function Arrivals() {
  return (
    <>
    <div className="text_category_element_block">
        <div className="desc_arrivals">
        <p>Latest Arrivals</p>
        <Link to={'/productContainer'} >
        <p className='more_desc'>More</p>
        </Link>
        </div>
        
        <LatestArrivalsSlider/>
    </div>
    </>
  )
}

export default Arrivals