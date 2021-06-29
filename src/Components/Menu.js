import React from 'react';
import './CSS/Menu.css';
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';

export const Menu = ()=>{
  return (
    <div className='menu'>
      <img src={logo} alt='logo'/>
      <div className='menu_name'>
        <h2>Inhome Cabinet</h2>
        <p>Aluminium & Glass doors</p>
      </div>

      <div className='menu_items'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/about'>
          About Us
        </Link>
        <Link to='/showcase'>
          Showcase
        </Link>
      </div>
    </div>
  )
}
