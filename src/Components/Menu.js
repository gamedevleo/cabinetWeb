import React from 'react';
import './CSS/Menu.css';
import logo from '../images/logo.jpg';

export const Menu = ()=>{
  return (
    <div className='menu'>
      <img src={logo} alt='logo'/>
      <div className='menu_name'>
        <h2>Inhome Cabinet</h2>
        <p>Aluminium & Glass doors</p>
      </div>

      <div className='menu_items'>
        <p>Home</p>
        <p>About US</p>
        <p>Showcase</p>
      </div>
    </div>
  )
}
