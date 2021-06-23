import React from 'react';
import Info from './Info';
import './CSS/Footer.css';

const Footer = ()=>{
  return (
    <div className='footer'>
      <Info title='Phone:' content='0497 611111'/>
      <Info title=' ' content='0497 655555'/>
      <Info title='Email:' content='inhomecabinet@gmail.com' />
      <Info title='Address:' content='12 Bellfrog Street, Greenacre, NSW 2190' />
    </div>
  )
}

export default Footer;
