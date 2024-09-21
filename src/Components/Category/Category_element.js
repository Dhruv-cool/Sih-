import React from 'react'
import './Category_element.css'
import { Link } from 'react-router-dom'
function Category_element({src,text}) {
  return (
    <div>
        <img src={src} alt="" className='img_element_category' />
        <Link to={`/productContainer`} className="category_name">
           <p className='category_name_p'>{text}</p>    
        </Link>
    </div>
  )
}

export default Category_element