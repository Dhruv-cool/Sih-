import React, { useState } from 'react'
import './ProductView.css'
function ProductView({product_img}) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed); // Toggle zoom state
  };
  return (
    <div className={`image-container ${isZoomed ? 'zoomed' : ''}`}>
          <img src={product_img} alt="" className='product_view_img' onClick={handleImageClick}  />        
    </div>
  )
}

export default ProductView