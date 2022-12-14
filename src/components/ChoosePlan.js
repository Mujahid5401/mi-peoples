import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common.css'
import logo from '../images/logo.png'
import arrow from '../images/arrow.png'
import basic from '../images/Basic.png'
import pro from '../images/Pro.png'
import Ellite from '../images/Ellite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ChoosePlan = () => {
    return (
        <>

        <div class="container-fluid g-0">
                <div className="row g-0">
                    <div className="col-sm-4">
                        <div className="left_colored_div px-5 h-100">
                        <img className="img-fluid blueSide_logo" src={logo} alt="logo" />

                        <h5 className="my-5" style={{color: "#ffffff"}}>Upgrade Plan</h5>

                        <ul className="list-group vertical-steps">
                        <li className="list-group-item active"><span>Choose plan</span></li>
                        <li className="list-group-item"><span>Payment Info</span></li>
                        <li className="list-group-item "><span>Confirm Payment</span></li>
                        </ul> 
  
                        </div>
                    </div>
                    <div className="col-sm-8">

                        <div className="primary_div_one justify-content-center">
                    
                        <div className="">
                            
                            <div className="w-75 mx-auto">
                            <h2 className="title_one text-center">Choose the best plan for your business</h2>

                            <div className="d-flex justify-content-center mt-5">
                            <div className="toggleBtn_div">
                            <input id="toggle-on" class="toggle toggle-left" name="toggle" value="false" type="radio"  defaultChecked={true}/>
                            <label for="toggle-on" class="btn-toggle">Monthly</label>
                            <input id="toggle-off" class="toggle toggle-right" name="toggle" value="true" type="radio" />
                            <label for="toggle-off" class="btn-toggle">Annual</label>
                            </div>
                            <div className="ms-2" style={{position: "relative"}}>
                                <img className="percent_arrow_icon" src={arrow} alt="Arrow Icon" />
                                <span style={{color: "#2E73EA", fontSize: "12px", fontWeight: "600", display: "block"}}>Save 20%</span>
                            </div>
                            </div>
                            </div>
    
                       


                        <div className="d-flex justify-content-center flex-wrap mt-5">
                        <div className="package_div">
                            <div class="ribbon  ribbon--red">110$
                            <br />
                            <span>Per Month</span>
                            </div>
                            <div className="p-3">
                            <img className="mt-4" src={basic} alt="" />
                            <h4>Premium</h4>

                            <div className="mt-5">
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> Unlimited access to yoga classes</p>
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> 24/7 Gym access</p>
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> Use of locker & shower</p>
                            <p className="package_point text-center">-</p>
                            <p className="package_point text-center">-</p>
                            <div className="text-center mt-5">
                            <Link to="/paymentsetup"><span style={{color: "#2E73EA", fontWeight: "600"}}>Select Plan</span></Link>
                            </div>
                            
                            </div>
                            </div>
                            
                        </div>
                        
                        <div className="package_div">
                            <div class="ribbon  ribbon--yellow" style={{backgroundColor: "#F2A811"}}>100$
                            <br />
                            <span>Per Month</span>
                            </div>
                            <div className="p-3">
                            <img className="mt-4" src={pro} alt="" />
                            <h4>Gold</h4>

                            <div className="mt-5">
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> Unlimited access to yoga classes</p>
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> 24/7 Gym access</p>
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> Use of locker & shower</p>
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> Weekday poll acess</p>
                            <p className="package_point text-center">-</p>
                            <div className="text-center mt-5">
                            <Link to="/paymentsetup"><span style={{color: "#2E73EA", fontWeight: "600"}}>Select Plan</span></Link>
                            </div>
                            
                            </div>
                            </div>
                            
                        </div>

                        <div className="package_div">
                            <div class="ribbon  ribbon--red">125$
                            <br />
                            <span>Per Month</span>
                            </div>
                            <div className="p-3">
                            <img className="mt-4" src={Ellite} alt="" />
                            <h4>Trial</h4>

                            <div className="mt-5">
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> Unlimited access to yoga classes</p>
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> 24/7 Gym access</p>
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> Use of locker & shower</p>
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> Weekday poll acess</p>
                            <p className="package_point"><FontAwesomeIcon icon={faCheck} /> 12% on all store products</p>
                            <div className="text-center mt-5">
                            <Link to="/paymentsetup"><span style={{color: "#2E73EA", fontWeight: "600"}}>Select Plan</span></Link>
                            </div>
                            
                            </div>
                            </div>
                            
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

export default ChoosePlan
