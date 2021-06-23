import React from 'react';
import './CSS/Info.css';

const Info=({title,content})=>{
  return (
    <div className='info'>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
}

export default Info;
