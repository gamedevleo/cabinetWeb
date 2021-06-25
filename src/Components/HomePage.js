import React from 'react';
import Card from './Card.js';
import headerImg from '../images/headerImg.jpg';
import waterproof from '../images/waterproof.jpg';
import fireproof from '../images/fireproof.jpg';
import stainless from '../images/stainless.jpg';
import BBQImg from '../images/BBQ2.jpg';
import wardrobeImg from '../images/wardrobe25.jpg';
import kitchenImg from '../images/kitchen1.jpg';
import wineCabinetImg from '../images/wineCabinet12.jpg';
import Footer from './Footer';

import './CSS/HomePage.css';

const HomePage =()=>{
  return (
    <div className='homepage'>
      <header>
        <img src={headerImg} alt=''/>
      </header>
      <div className='homepage_content'>
        
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;
