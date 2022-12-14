import React from 'react'
import logo from '../images/logo.png'

const Login = () => {
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
                    <h2 className="title_one text-center">Welcome Back!</h2>
                    <h6 className="title_two text-center mb-5">Please Login to your account</h6>
                    <div>
                    <div class="form-floating floating_input mb-4">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Your Email</label>
                    </div>
                    <div class="form-floating floating_input mb-4">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Your Password</label>
                    </div>

                    <div>
                        <button className="btn btn_one">Login</button>
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

export default Login
