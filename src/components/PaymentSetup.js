import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const PaymentSetup = () => {
    return (
        <>

        <div class="container-fluid g-0">
                <div className="row g-0">
                    <div className="col-sm-4">
                        <div className="left_colored_div px-5 h-100">
                        <img className="img-fluid blueSide_logo" src={logo} alt="logo" />

                        <h5 className="my-5" style={{color: "#ffffff"}}>Upgrade Plan</h5>

                        <ul className="list-group vertical-steps">
                        <li className="list-group-item completed"><span>Choose plan</span></li>
                        <li className="list-group-item active"><span>Payment Info</span></li>
                        <li className="list-group-item "><span>Confirm Payment</span></li>
                        </ul> 
  
                        </div>
                    </div>
                    <div className="col-sm-8">
                    
                        <div className="primary_div_one">
                            <div className="w-50 mx-auto">
                            <h2 className="title_one text-center">Setup payment method</h2>
                            <h6 className="title_two text-center mb-5">Please make the payment to start enjoying all the feature of <br /> our premium plan as soon as possible.</h6>
                            <div>
                            <div class="form-floating floating_input mb-4">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Card Information</label>
                            </div>
                            <div class="form-floating floating_input mb-4">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Card Holder Name</label>
                            </div>
                            <div class="form-floating floating_input mb-4">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Country</label>
                            </div>

                            <div class="form-check mr-3 check"> 
                            <label class="form-check-label cstm_chk_label" for="defaultCheck1">
                            Please confirm that you have read the term of use.
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <span class="checkmark"></span>
                            </label>
                            </div>

                            
                            <div class="d-grid mt-5">
                            <Link to="/activated"><button className="btn btn_one w-100">Proceed Payment</button></Link>
                            </div>
   
        
                            </div>
                            </div>
                            
                        </div>
                            
                        
                    </div>
        
                    
                </div> 
                </div>
                       
        
                </>
    )
}

export default PaymentSetup
