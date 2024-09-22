import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import img1 from '../Photos/clothes_carousel.jpg'
import img2 from '../Photos/handicraft_carousel.jpg'
import img3 from '../Photos/puja_carousel.jpg'
import img4 from '../Photos/season_carousel.jpg'

import './ControlledCarousel.css'

const lists_front=[
  { id:1,img:img1, text:"First Slide"},
  { id:1,img:img2, text:"Second Slide"},
  { id:1,img:img3, text:"Third Slide"},
  { id:1,img:img4, text:"Fourth Slide"},

];
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={10000} className='carousel_custom' >
        {
          lists_front.map((item,idx)=>(
            
                <Carousel.Item key={idx}>
              <ExampleCarouselImage src={item.img}  text={item.text} />
              </Carousel.Item>
              
          ))
          }
      

    </Carousel>
  );
}

export default ControlledCarousel;