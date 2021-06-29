import React from 'react';


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

import './CSS/HomePage.css';

const HomePage =()=>{
  return (
    <div className='homepage'>
      <header>
        <img src={headerImg} alt=''/>
      </header>
      <div className='homepage_content'>
        <Showcase title='Kitchen' img1={kitchen2} img2={kitchen4} img3={kitchen9} img4={kitchen10}/>
        <Showcase title='Wardrobe' img1={wardrobe25} img2={wardrobe26} img3={wardrobe29} img4={wardrobe32}/>
        <Showcase title='WineCabinet' img1={wineCabinet8} img2={wineCabinet9} img3={wineCabinet12} img4={wineCabinet14}/>
        <Showcase title='BBQ' img1={wineCabinet8} img2={wineCabinet9} img3={wineCabinet12} img4={wineCabinet14}/>
        <Showcase title='Material' img1={wineCabinet8} img2={wineCabinet9} img3={wineCabinet12} img4={wineCabinet14}/>
      </div>
    </div>
  )
}

export default HomePage;
