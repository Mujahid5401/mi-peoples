import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <>

<div class="container-fluid g-0">
        <div className="row g-0">
            <div className="col-sm-4">
                <div className="left_colored_div px-5">
                    <div className="d-flex align-items-center text-center   ">
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
                    <h2 className="title_one text-center">Get started with MiPeople!</h2>
                    <h6 className="title_two text-center mb-5">Creat Your Admin Account</h6>
                    <div>
                    <div class="form-floating floating_input mb-4">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Fairst Name</label>
                    </div>
                    <div class="form-floating floating_input mb-4">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Last Name</label>
                    </div>
                    <div class="form-floating floating_input mb-4">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Your Email</label>
                    </div>
                    <div class="form-floating floating_input mb-4">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Your Password</label>
                    </div>

                    <div class="form-check mr-3 check"> 
                    <label class="form-check-label cstm_chk_label" for="defaultCheck1" style={{color: "#2E73EA"}}>
                    Remember Me
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" defaultChecked={true}/>
                    <span class="checkmark"></span>
                    </label>
                    </div>

                    <div>
                    <Link to="/chooseplan"><button className="btn btn_one">Sign Up</button></Link>
                        <span className="float-end" style={{color: "#2E73EA", fontSize: "14px"}}>Forgot Password?</span>
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

export default Signup
