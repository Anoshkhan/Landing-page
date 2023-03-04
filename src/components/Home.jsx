import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Techist.</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>By continually adapting to technological advances and modern trends, TechIst always remains at the forefront of application development. Our experienced and certified development teams use leading-edge methodologies to design, develop, implement, and continually enhance innovative business solutions for all major platforms and devices.</p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
        </div>
    </div>

    <div className='home4' id='brands'>
        <div >
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.2s",
             }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{
              animationDelay: "0.5s",
             }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay: "0.8s",
             }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{
              animationDelay: "1.1s",
             }}>
              <AiFillLinkedin />
              <p>Linkedin</p>
            </div>
          </article>
        </div>
    </div>
    </>
    
  )
}

export default Home