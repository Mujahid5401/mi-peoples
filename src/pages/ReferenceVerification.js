import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/Rightbar';
import { Button } from 'react-bootstrap';


const ReferenceVerification = () => {


    const [isActive, setActive] = useState('RefVer')
     

    
    return (
        <>
        
           <Sidebar />
           <div className='d-flex'>
           <div className='left-wrapper flex-grow-1' id="content-wrapper"><h1>rfVerification</h1>
           <div className="container-fluid">
        
            <div>
             <Button className={`btn_two ${(isActive === 'RefVer') ? "active" : ""}`} onClick={() => {console.log('RefVer'); setActive('RefVer')}}>Reference Verification</Button>
             <Button className={`btn_two ms-3 ${(isActive === 'DocVer') ? "active" : ""}`} onClick={() => {console.log('DocVer'); setActive('DocVer')}}>Document Verification</Button>   
            </div>

            <div className='mt-5'>
            <h5 className='mb-0'>Reference Verification</h5>
            </div>
            <hr />

            <div className='d-flex'>
                <span className='text_one' style={{"minWidth" : "15%"}}>Candidate:</span>
                <span className='text_two'>Sophia William</span>
            </div>

            <div className='d-flex mt-3'>
                <span className='text_one' style={{"minWidth" : "15%"}}>Status:</span>
                <span className='text_two'>Screening & Vetting</span>
            </div>

            <div className='d-flex mt-3'>
                <span className='text_one' style={{"minWidth" : "15%"}}>Date Created:</span>
                <span className='text_two'>01-01-2020</span>
            </div>
           
            <div className='d-flex mt-3'>
                <span className='text_one' style={{"minWidth" : "15%"}}>Date Expired:</span>
                <span className='text_two'>01-03-2020</span>
            </div>

            <div className='d-flex mt-3'>
                <span className='text_one' style={{"minWidth" : "15%"}}>Vacancy:</span>
                <span className='text_two'>Quality Aassurance</span>
            </div>

            <div className='d-flex mt-3'>
                <span className='text_one' style={{"minWidth" : "15%"}}>Members:</span>
                <span className='text_two'>William Smith, Alex John, George O Corner</span>
            </div>

            <div className='d-flex mt-4'>
                <span className='text_one' style={{"minWidth" : "15%"}}>Tags:</span>
                <div>
                    <span className='tag_one me-2'>Application recieved</span>
                    <span className='tag_one me-2'>Test</span>
                    <span className='tag_one me-2'>Interview</span>
                    <span className='tag_one me-2'>Offer letter</span>
                    <span className='tag_two me-2'>Doc verification</span>
                    <span className='tag_two me-2'>Ref Verification</span>
                </div>
            </div>
           
           </div>
           
           </div>
           <Rightbar tabName={isActive}/>

            </div> 
           
           
        </>
    )
}

export default ReferenceVerification