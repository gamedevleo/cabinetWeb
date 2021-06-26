import React from 'react';
<<<<<<< HEAD
import headerImg from '../images/headerImg.jpg';
import Footer from './Footer';
import Showcase from './Showcase';
import kitchen2 from '../images/kitchen2.jpg';
import kitchen4 from '../images/kitchen4.jpg';
import kitchen9 from '../images/kitchen9.jpg';
import kitchen10 from '../images/kitchen10.jpg';

import wardrobe25 from '../images/wardrobe25.jpg';
import wardrobe26 from '../images/wardrobe26.jpg';
import wardrobe29 from '../images/wardrobe29.jpg';
import wardrobe32 from '../images/wardrobe32.jpg';

import wineCabinet8 from '../images/wineCabinet8.jpg';
import wineCabinet9 from '../images/wineCabinet9.jpg';
import wineCabinet12 from '../images/wineCabinet12.jpg';
import wineCabinet14 from '../images/wineCabinet14.jpg';

=======
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
>>>>>>> 78918d35aaec3a104974faecc1762464f4275759

import './CSS/HomePage.css';

const HomePage =()=>{
  return (
    <div className='homepage'>
      <header>
        <img src={headerImg} alt=''/>
      </header>
      <div className='homepage_content'>
<<<<<<< HEAD
        <Showcase title='Kitchen' img1={kitchen2} img2={kitchen4} img3={kitchen9} img4={kitchen10}/>
        <Showcase title='Wardrobe' img1={wardrobe25} img2={wardrobe26} img3={wardrobe29} img4={wardrobe32}/>
        <Showcase title='WineCabinet' img1={wineCabinet8} img2={wineCabinet9} img3={wineCabinet12} img4={wineCabinet14}/>
=======
        
>>>>>>> 78918d35aaec3a104974faecc1762464f4275759
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;
