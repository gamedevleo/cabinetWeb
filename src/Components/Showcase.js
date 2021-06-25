import React from 'react';

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
      </div>
    </div>
  )
}

export
