import React from 'react';
import Card from './Card';

const Showcase = ({title,img1,img2,img3,img4})=>{
  return (
    <div className='homepage_classification'>
      <div className='homepage_classification_title'>
        <h3>{title}</h3>
      </div>
      <div className='homepage_classification_items'>
        <Card img={img1} title='BBQ'/>
        <Card img={img2} title='Wardrobe'/>
        <Card img={img3} title='Kitchen'/>
        <Card img={img4} title='Wine Cabinet'/>
        </div>
    </div>
  )
}

export default Showcase;
