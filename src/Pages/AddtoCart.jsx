import React, { useState } from 'react'
import img1 from '../Components/Photos/clothes_category.jpg'
import CartProduct from '../Components/Addtocartproduct/CartProduct'
import './Addtocart.css'
import BackButton from '../Components/BackButton';
const items = [
    { id: 1, content: "Item 1", img:img1, discount: "40", price: "51.00" },
    { id: 2, content: "Item 2", img: img1,  price: "45.00" },
    { id: 3, content: "Item 3", img: img1, discount: "70", price: "9.00" },
    { id: 4, content: "Item 4", img: img1, price: "28.00" },
    { id: 5, content: "Item 5", img: img1, price: "35.00" },
    { id: 6, content: "Item 6", img: img1, discount: "50", price: "18.00" },
    // Add more items as needed
  ];
function AddtoCart() {
    const initialTotalItems = items.length;  // Each item starts with quantity 1
    const initialTotalPrice = items.reduce((total, item) => total + Number(item.price), 0);

    const [cartTotals, setCartTotals] = useState({  totalItems: initialTotalItems,
        totalPrice: initialTotalPrice, });
    const handleCartUpdate = (quantityChange, priceChange) => {
        setCartTotals(prevTotals => ({
            totalItems: prevTotals.totalItems + quantityChange,
            totalPrice: prevTotals.totalPrice + priceChange
        }));
    };
  return (
    <div className='container_pages_App'>
       <BackButton/>
        <div className='text_category_element_block'>
        
            {
                items.map((item)=>(
                    <CartProduct
                        Cid={item.id}
                       imgSrc={item.img}
                       title={item.content}
                       price={item.price}
                       onCartUpdate={handleCartUpdate}
                    />
                ))
            }
             <div className="buy_now">
            <h2>Cart Summary</h2>
            <p>Total Items: {cartTotals.totalItems}</p>
            <p>Total Price: ${cartTotals.totalPrice.toFixed(2)}</p>
            <button className='button_buy'>Buy Now</button>
            </div>
        </div>
        
    </div>
  )
}

export default AddtoCart