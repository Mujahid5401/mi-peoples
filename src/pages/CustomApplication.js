import React from 'react'
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import viewIcon  from '../images/eye.png'
import deleteIcon  from '../images/bin.png'
import editIcon  from '../images/edit.png'


const CustomApplication = () => {
  return (
    <>
    <Sidebar />
    <div className='' id="content-wrapper">
           <div className="container-fluid">
           <div><h5 class="mb-0">Custom Application Forms</h5></div>
           <div className='d-flex mt-4'>
            <div className='w-25'>
            <select class="form-select customSelect" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </div>
            <div className="ms-3 w-25">
            <input type="email" className='form-control customSearch'  id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className='ms-auto'>
              <button type="button" class="btn btn_three">Add</button>
            </div>
           </div>

            <hr />

            <div className="table-responsive mt-5">
      <table className="table tableOne ">
  <thead className="table-light">
  <tr>
      <th scope="col">Name</th>
      <th scope="col">Reviewed by</th>
      <th scope="col">Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  
    <>
  <tr>
      <td>Sample Driver Application Form</td>
      <td>Sophia Will</td>
      <td>01-01-2021</td>
      <td>
        {/* {user.action} */}

      <div className='actionCell'>
      <Link to=""><img src={viewIcon} alt="" /></Link>
      <Link to=""><img src={editIcon} alt="" /></Link>
      <Link to=""><img src={deleteIcon} alt="" /></Link>
      </div>
      </td>
    </tr>

    <tr>
      <td>Sample Driver Application Form</td>
      <td>Sophia Will</td>
      <td>01-01-2021</td>
      <td>
        {/* {user.action} */}

      <div className='actionCell'>
      <Link to=""><img src={viewIcon} alt="" /></Link>
      <Link to=""><img src={editIcon} alt="" /></Link>
      <Link to=""><img src={deleteIcon} alt="" /></Link>
      </div>
      </td>
    </tr>

    <tr>
      <td>Sample Driver Application Form</td>
      <td>Sophia Will</td>
      <td>01-01-2021</td>
      <td>
        {/* {user.action} */}

      <div className='actionCell'>
      <Link to=""><img src={viewIcon} alt="" /></Link>
      <Link to=""><img src={editIcon} alt="" /></Link>
      <Link to=""><img src={deleteIcon} alt="" /></Link>
      </div>
      </td>
    </tr>

    <tr>
      <td>Sample Driver Application Form</td>
      <td>Sophia Will</td>
      <td>01-01-2021</td>
      <td>
        {/* {user.action} */}

      <div className='actionCell'>
      <Link to=""><img src={viewIcon} alt="" /></Link>
      <Link to=""><img src={editIcon} alt="" /></Link>
      <Link to=""><img src={deleteIcon} alt="" /></Link>
      </div>
      </td>
    </tr>

    <tr>
      <td>Sample Driver Application Form</td>
      <td>Sophia Will</td>
      <td>01-01-2021</td>
      <td>
        {/* {user.action} */}

      <div className='actionCell'>
      <Link to=""><img src={viewIcon} alt="" /></Link>
      <Link to=""><img src={editIcon} alt="" /></Link>
      <Link to=""><img src={deleteIcon} alt="" /></Link>
      </div>
      </td>
    </tr>

    <tr>
      <td>Sample Driver Application Form</td>
      <td>Sophia Will</td>
      <td>01-01-2021</td>
      <td>
        {/* {user.action} */}

      <div className='actionCell'>
      <Link to=""><img src={viewIcon} alt="" /></Link>
      <Link to=""><img src={editIcon} alt="" /></Link>
      <Link to=""><img src={deleteIcon} alt="" /></Link>
      </div>
      </td>
    </tr>

    

    </>
   
  </tbody>
</table>

</div>

           </div>
    </div>       
    </>
  )
}

export default CustomApplication