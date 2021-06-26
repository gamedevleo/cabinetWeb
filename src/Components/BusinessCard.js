import React from 'react';
import './CSS/BusinessCard.css';
import Info from './Info';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const BusinessCard = ()=>{
  return (
    <div className='businesscard'>
      <div className='businesscard_name'>
        <h1>InhomeCabinets</h1>
        <p>Aluminium Cabinet</p>
      </div>
      <div className='businesscard_details'>
        <div className='businesscard_details_left'>
          <h1>Xing Liu</h1>
        </div>
        <div className='businesscard_details_right'>
          <div className='detail'>
            <PhoneIphoneIcon /><Info title='Phone:' content='0497 611111'/>
          </div>
          <div className='detail'>
            <LocationOnIcon /><Info title='Address:' content='12 Bellfrog Street, Greenacre,NSW'/>
          </div>
          <div className='detail'>
            <MailOutlineIcon /><Info title='Email:' content='12345@gmail.com' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default BusinessCard;
