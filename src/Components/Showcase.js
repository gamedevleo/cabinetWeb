import React from 'react';
<<<<<<< HEAD
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
=======

const Showcase = ()=>{
  return (
    <div className='homepage_classification'>
      <div className='homepage_classification_title'>
        <h3>CLASSIFICATION</h3>
      </div>
      <div className='homepage_classification_items'>
        <Card img={BBQImg} title='BBQ'/>
        <Card img={wardrobeImg} title='Wardrobe'/>
        <Card img={kitchenImg} title='Kitchen'/>
        <Card img={wineCabinetImg} title='Wine Cabinet'/>
>>>>>>> 78918d35aaec3a104974faecc1762464f4275759
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default Showcase;
=======
export
>>>>>>> 78918d35aaec3a104974faecc1762464f4275759
