import React from 'react'
import img1 from '../Photos/clothes_category.jpg'
import ProductView from './ProductView'
import './ProductGrid.css'
function ProductGrid({pro}) {
    const productimg=[
        {id:1, img:img1},
        {id:2, img:img1},
        {id:3, img:img1},
        {id:4, img:img1},
    ]
 
  return (
    <div className='product_img_grid'>
         {
            productimg.map(item =>(
                <ProductView
                   product_img={item.img}
                />
            ))
         }

    </div>
  )
}

export default ProductGrid