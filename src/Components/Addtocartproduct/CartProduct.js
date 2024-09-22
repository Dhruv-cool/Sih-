import React, {  useState } from 'react'

import './CartProduct.css'
import { Link } from 'react-router-dom';
 
function CartProduct({Cid,imgSrc,title,price, onCartUpdate}) {
    const [quantity, setQuantity] = useState(1);
      const handleQuantityChange = (amount) => {
        const newQuantity = quantity + amount;
        if (newQuantity> 0) {
            
            const priceChange = amount * price;
            
            setQuantity(newQuantity);
            onCartUpdate(amount, priceChange); // Update the parent with new quantity and price
        }
    };

  return (
    <div className='product_cart_container'>
      <Link to={`/productInterface/${Cid}`} >
      <img src={imgSrc} alt=""  className='img_product_cart'/>
      </Link>
      <div className="product_desc_cart">
         <h6 className='title_product_cart'>{title}</h6>
         <p className='price_cart'>${price}
         </p>
         <div className="quantity_container">
         <p className='quantity_cart'>Quantity</p>
         <p onClick={() => handleQuantityChange(-1)} className='buttons_quantity'>-</p>
        <span className='quantity_number'>{quantity}</span>
        <p onClick={() => handleQuantityChange(1)} className='buttons_quantity' >+</p>
         </div>
         

      </div>
    </div>
  )
}

export default CartProduct