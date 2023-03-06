import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/5.png";

const Services = () => {
  return (
    <div className='services'>
        <Carousel 
        infiniteLoop
        autoPlay 
        interval={3000}
        showStatus={false}
        showArrows={false}>
            <div>
                <img src={img3} alt="item3"/>
                <h4 className='legend'>Network Support Services</h4>
            </div>
            <div>
                <img src={img1} alt="item1"/>
                <h4 className='legend'>Full Stack</h4>
            </div>
            <div>
                <img src={img2} alt="item2"/>
                <h4 className='legend'>Peer-to-peer Support</h4>
            </div>
        </Carousel>
    </div>
  )
}

export default Services