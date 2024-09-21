import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../Photos/clothes_category.jpg'
import './Product_Container.css'

const items = [
  { id: 1, content: "Item 1", img:img1, discount: "40", price: "51.00" },
  { id: 2, content: "Item 2", img: img1,  price: "45.00" },
  { id: 3, content: "Item 3", img: img1, discount: "70", price: "9.00" },
  { id: 4, content: "Item 4", img: img1, price: "28.00" },
  { id: 5, content: "Item 5", img: img1, price: "35.00" },
  { id: 6, content: "Item 6", img: img1, discount: "50", price: "18.00" },
  // Add more items as needed
];
function Product_Container() {
  return (
    <div className='container_pages_App'>
    <div className="text_category_element_block">
      <h2 className='category_productname'>Womens Top</h2>
      <p className="category_desc">This is your category description. Its a great place to tell customers what this category is about, connect with your audience and draw attention to your products.</p>
      <div className="category_productcard">
        {
          items.map((item,idx)=>(
            <ProductCard 
            Cid={item.id}
            imageSrc={item.img}
            title={item.content}
            oldPrice={item.oldPrice}
            newPrice={item.price}
            discount={item.discount}
        />
          ))}
     
      </div>
    </div>
    </div>
  )
}

export default Product_Container