import React from 'react';
import './CSS/Menu.css';
import logo from '../images/logo.jpg';

export const Menu = ()=>{
  return (
    <div className='menu'>
      <img src={logo} alt='logo'/>
      <div className='menu_items'>
        <h3>Home</h3>
        <h3>About US</h3>
        <h3>Showcase</h3>
      </div>
    </div>
  )
}
