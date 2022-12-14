import React from 'react';
import { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { faCheckCircle  } from '@fortawesome/free-solid-svg-icons';
// import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons'
// import { faTimes } from '@fortawesome/pro-duotone-svg-icons';
import spiner_one from '../images/spiner-one.png'
import check_circle  from '../images/checked.png'
import alert_icon  from '../images/danger.png'
import info_icon  from '../images/information-button.png'
import viewIcon  from '../images/eye.png'
import deleteIcon  from '../images/bin.png'
import editIcon  from '../images/edit.png'
import { Link } from 'react-router-dom';



const DashTable = () => {

  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id]}));
    
  };
  
  const data = [
    { id: "1", date: "18-02-2022 1", monitor: "By Self 1", name: "Megan Wilson 1", status: "Processing", action: "taken 1", child: [
      { id: "a", name: "Faiza Kareem 11", company: "Essentia Tech", status: "Recomended", email: "Faiza@email.com", mobile: "987 985 9874", document: "SIA lic", date: "20-09-2020", varified: "Verified" },
      { id: "c", name: "Faiza Kareem 22", company: "Essentia Tech33", status: "Recomended", email: "Faiza@email.com", mobile: "987 985 9874", document: "SIA lic", date: "20-09-2020", varified: "Verified" },
      { id: "b", name: "Faiza Kareem 33", company: "Essentia Tech33", status: "Recomended", email: "Faiza@email.com", mobile: "987 985 9874", document: "SIA lic", date: "20-09-2020", varified: "Verified" }
      

  ] },
    { id: "2", date: "18-02-2022 2", monitor: "By Self 2", name: "Megan Wilson 2", status: "Check", action: "taken 2", child: [
      { id: "b", name: "Faiza Kareem2", company: "Essentia Tech2", status: "Recomended2", email: "Faiza@email.com2", mobile: "987 985 98742", document: "SIA lic2", date: "20-09-20202", varified: "Verified2"}
    ]},
    { id: "3", date: "18-02-2022 3", monitor: "By Self 3", name: "Megan Wilson 3", status: "Missing Info", action: "taken 3", child: [] },
    { id: "4", date: "18-02-2022 3", monitor: "By Self 3", name: "Megan Wilson 3", status: "Alert", action: "taken 4 ", child: [] },
    { id: "5", date: "18-02-2022 3", monitor: "By Self 3", name: "Megan Wilson 3", status: "Check", action: "taken 3", child: [] },
  ];

  // const InnerData = [
  //   { id: "1", name: "Faiza Kareem", company: "Essentia Tech", status: "Recomended", email: "Faiza@email.com", mobile: "987 985 9874", document: "SIA lic", date: "20-09-2020", varified: "Verified" },
  //   { id: "1", name: "Faiza Kareem2", company: "Essentia Tech2", status: "Recomended2", email: "Faiza@email.com2", mobile: "987 985 98742", document: "SIA lic2", date: "20-09-20202", varified: "Verified2" },
    
  // ];

  return (
     <>
   
      <div className='d-flex align-items-center mt-5'>
        <div>
          <h5 className='mb-0'>Employee <span className='fcOne'>(50)</span></h5>
        </div>
        <div className='ms-auto'>  
          <input className='form-control dashForm' type="text" placeholder='Search by candidate name...' />
        </div>
        <div className='ms-3'>
        <select className="form-select dashForm" aria-label="Default select example">
          <option selected>Last 10 pages</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>
        <div className='ms-3'>
        <select className="form-select dashForm" aria-label="Default select example">
          <option selected>Search by company</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>
        <div className='ms-3'>
          <button className='btn dashButton'>Advance Search</button>
        </div>
      </div>

      <hr /> 

      <div className="table-responsive mt-5">
      <table className="table tableOne ">
  <thead className="table-light">
  <tr>
      <th scope="col">Date</th>
      <th scope="col">Monitor</th>
      <th scope="col">Name</th>
      <th scope="col" className='greenColor'>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {data.map((user) => (
    <>
  <tr>
      <td>{user.date}</td>
      <td>{user.monitor}</td>
      <td>{user.name}</td>
      <td>
      {user.status === "Processing" ? <div className='process_cell'><img src={spiner_one} alt="" /><span className='ms-3' style={{color: "#e9a61f"}}>{user.status}</span></div> : ''}
      {user.status === "Check" ? <div className='process_cell'><img src={check_circle} alt="" /><span className='ms-3' style={{color: "#369B80"}}>{user.status}</span></div> : ''}
      {user.status === "Missing Info" ? <div className='process_cell'><img src={info_icon} alt="" /><span className='ms-3' style={{color: "#2E73EA"}}>{user.status}</span></div> : ''}
      {user.status === "Alert" ? <div className='process_cell'><img src={alert_icon} alt="" /><span className='ms-3' style={{color: "#FF6347"}}>{user.status}</span></div> : ''}
      
          
      {/* {user.status === "Processing" ? <img src={spiner_one} alt="" /> : ''}<span className='ms-3' style={{color: "red"}}>{user.status}</span> */}
      </td>
      <td>
        {/* {user.action} */}
      <div className='actionCell'>
      <Link to=""><img src={viewIcon} alt="" /></Link>
      <Link to=""><img src={editIcon} alt="" /></Link>
      <Link to=""><img src={deleteIcon} alt="" /></Link>
      <Link to="#" className='float-end'
        onClick={() => handleClick(user.id)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </Link>
      </div>
     
      
      </td>
    </tr>

    <tr style={{minHeight: '150px'}} className="tableTwoTr">
      <td colSpan={5} className="p-0" >
        <Collapse  in={open[user.id]}>
          <div id="example-collapse-text">
            
                <table class="table table-borderless tableTwo">
                <thead>
                  <tr>
                    <th colSpan={5}>References:</th> 
                    <th colSpan={3}>Documents:</th>
                  </tr>
                </thead>
                <tbody>
                {user.child.map((innerUser, index) => (
                               
                  <tr key={innerUser.id}>
                   <td>{innerUser.name}</td>
                   <td>{innerUser.company}</td>
                   <td>{innerUser.status}</td>
                   <td>{innerUser.email}</td>
                   <td>{innerUser.mobile}</td>
                   <td>{innerUser.document}</td>
                   <td>{innerUser.date}</td>
                   <td>{innerUser.varified}</td>
                   {index === 0 ? <td rowSpan={user.child.length} ><Button>Approved</Button></td> : ''}      
                  </tr>
                  ))} 
                  
                </tbody>
              </table>
  
          </div>
        </Collapse>
        </td>
      </tr>

    </>
   ))}    
  </tbody>
</table>

</div>


     </>
   )
}

export default DashTable;
