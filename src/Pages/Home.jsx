import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ControlledCarousel from '../Components/Carousel/ControlledCarousel'
import Category_container from '../Components/Category/Category_container'
import Arrivals from '../Components/Arrivals/Arrivals'
import BackgroundVideo from '../Components/BackgroundVideo/BackgroundVideo'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <>
      <div className="container_pages_App">
           <div>
                 <ControlledCarousel/>
                 <Category_container/>
                 <Arrivals/>
                 <BackgroundVideo/>
                 
            </div>
      </div>
    
    </>
  )
}

export default Home