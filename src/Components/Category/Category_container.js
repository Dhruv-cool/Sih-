import React from 'react'
import Category_element from './Category_element'
import img1 from '../Photos/clothes_category.jpg'
import img2 from '../Photos/handicraft_category.jpg'
import img3 from '../Photos/puja_product.jpg'
import './Category_container.css'
function Category_container() {
  return (
    <>
       <div className="text_category_element_block">
       <p>Shop by Category</p>
       <div className="category_element_key">
       <Category_element src={img1} text={"Clothes"}/>
       <Category_element src={img2} text={"Handicrafts"}/>
       <Category_element src={img3} text={"Puja Samagri"} />
       </div>
      </div>
      
    </>
  )
}

export default Category_container