import React from 'react'
import {useParams} from 'react-router-dom'
import img1 from '../Components/Photos/clothes_category.jpg'
import ProductGrid from '../Components/ProductImagesGrid/ProductGrid';
import ProductPage from '../Components/ProductImagesGrid/ProductPageDesc';
import './ProductInterface.css'
import BackButton from '../Components/BackButton';
function ProductInterface() {
    const {Cid}=useParams();
    const items = [
        { id: 1, content: "Item 1", img:img1, discount: "40", oldPrice:"70", price: "51.00" },
        { id: 2, content: "Item 2", img: img1,  price: "45.00" },
        { id: 3, content: "Item 3", img: img1, discount: "70", oldPrice:'50', price: "9.00" },
        { id: 4, content: "Item 4", img: img1, price: "28.00" },
        { id: 5, content: "Item 5", img: img1, price: "35.00" },
        { id: 6, content: "Item 6", img: img1, discount: "50",oldPrice:'36' ,price: "18.00" },
        // Add more items as needed
      ];
    const vv=items.filter(q=> q.id=== parseInt(Cid))[0];
    // console.log(vv);
  return (
    <div className='container_pages_App'>
       <BackButton/>
        <div className="text_category_element_block  product_interface_grid">
        <ProductGrid 
           prod={vv}
         />
         <ProductPage/>
        </div>
    </div>
    )
}

export default ProductInterface