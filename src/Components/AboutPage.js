import React from 'react';
import headerImg from '../images/headerImg.jpg';

const AboutPage = ()=>{
  return (
    <div className='aboutpage'>
      <header>
        <img src={headerImg} alt=''/>
      </header>
      <p>
        Inhome Cabinets is located in 12 Bellfrog Street,Greenacre, NSW. With more than 10 years experience we do custom design for our customers from start to finish.
        <br/>We introduced modern furniture material, aluminium material, to australia market. Aluminium is waterproof, fireproof, anti-corrision, anti-pest, durable. It can last more than 30 years. It's the best choice for BBQ, Kitchen , wardrobe, and bathroom.
        <br/>Inhome cabinets provides variety of colors and aluminium materials for our customers.
      </p>
    </div>
  )
}

export default AboutPage;
