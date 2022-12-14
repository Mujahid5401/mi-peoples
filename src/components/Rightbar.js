import React from 'react'
// import { useState } from 'react';
import '../styles/rightbar.css'
import DocVerify from './DocVerify'
import RefVerify from './RefVerify'
// import ReferenceVerification from '../pages/ReferenceVerification'

const Rightbar = (props) => {

 const isActive = props.tabName;

  return (
    <>
    <div className='rightbar-wrapper'>Rightbar
    

    {(isActive === 'RefVer') ? <RefVerify /> : <DocVerify />}
    
     : 
    
    <h1>2</h1>



   
    
    </div>
    </>
  )
}

export default Rightbar