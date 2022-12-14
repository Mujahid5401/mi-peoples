import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common.css'
import logo from '../images/logo.png'
import activated from '../images/activated.png'
import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <>

<div class="container-fluid g-0">
        <div className="row g-0">
            <div className="col-sm-4">
                <div className="left_colored_div px-5">
                    <div className="d-flex align-items-center text-center">
                    <div>    
                    <img className="logoImage img-fluid" src={logo} alt="logo" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In deserunt nisi soluta corrupti deleniti ad nobis, incidunt iste sit eligendi nam quaerat excepturi. Cupiditate ipsa error quaerat molestias repellat amet.
                    </p>
                    </div>    
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
            
                <div className="primary_div_one">
                    <div className="w-50 mx-auto">
                    <img className="d-block mx-auto mb-5" src={activated} alt="" style={{height: "200px"}} />    
                    <h2 className="title_one text-center">Your account is activated</h2>
                    <h6 className="text-center" style={{color: "#2E73EA"}}>Check your email!</h6>

                    <p className="text-center mt-5" style={{color: "#888", fontWeight: "600"}}>We have send you a verfication email to <br /> <span style={{color: "#000"}}>John_Doe@email.com.</span> Click and follow the link inside it.</p>

                    <p className="text-center mt-5" style={{color: "#888", fontWeight: "600"}}>Or go to <Link to="/login">Login</Link></p>
                   
                    <div>
    
                    </div>
                    </div>
                    
                </div>
                    
                
            </div>

            
            


        </div> 
        </div>
               

        </>
    )
}

export default Signup

