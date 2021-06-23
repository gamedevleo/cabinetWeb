import React from 'react';
import './CSS/Card.css';

const Card=({img,title})=>{
  return (
    <div className='card'>
      <h3>{title}</h3>
      <div className='parent'>
        <div  className='child' style={{backgroundImage:`url(${img})`}}></div>
      </div>
    </div>
  )
}
export default Card;
