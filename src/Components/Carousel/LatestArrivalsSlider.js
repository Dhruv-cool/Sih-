import React from 'react'
import Slider from "react-slick";
import img1 from '../Photos/clothes_category.jpg'
import ProductCard from '../ProductPage/ProductCard';
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import './LatestArrivalsSlider.css'
const items = [
    { id: 1, content: "Item 1", img:img1, discount: "40", oldPrice:"70", price: "51.00" },
    { id: 2, content: "Item 2", img: img1,  price: "45.00" },
    { id: 3, content: "Item 3", img: img1, discount: "70", oldPrice:'50', price: "9.00" },
    { id: 4, content: "Item 4", img: img1, price: "28.00" },
    { id: 5, content: "Item 5", img: img1, price: "35.00" },
    { id: 6, content: "Item 6", img: img1, discount: "50",oldPrice:'36' ,price: "18.00" },
    // Add more items as needed
  ];
function LatestArrivalsSlider() {

    const settings = {
        dots: false,          // Show dots below the carousel
        infinite: false,      // Enable infinite scrolling
        speed: 500,          // Transition speed
        slidesToShow: 4,     // Show one slide at a time
        slidesToScroll: 1,   // Scroll one slide at a time
        arrows: true,        // Enable prev/next arrows
      };
  return (
    <>
     <Slider {...settings}>
      {items.map(item => (
        <div key={item.id}>
           <ProductCard 
                  Cid={item.id}
                  imageSrc={item.img}
                  title={item.content}
                  oldPrice={item.oldPrice}
                  newPrice={item.price}
                  discount={item.discount}
                  />
        </div>
      ))}
    </Slider>
       
    
    </>
  )
}

export default LatestArrivalsSlider