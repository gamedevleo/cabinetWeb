import React from 'react';
import Info from './Info';
import './CSS/Footer.css';
<<<<<<< HEAD
import BusinessCard from './BusinessCard';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
const Footer = ()=>{
  return (
    <div className='footer'>
      <BusinessCard />
      
=======

const Footer = ()=>{
  return (
    <div className='footer'>
      <Info title='Phone:' content='0497 611111'/>
      <Info title=' ' content='0497 655555'/>
      <Info title='Email:' content='inhomecabinet@gmail.com' />
      <Info title='Address:' content='12 Bellfrog Street, Greenacre, NSW 2190' />
>>>>>>> 78918d35aaec3a104974faecc1762464f4275759
    </div>
  )
}

export default Footer;
