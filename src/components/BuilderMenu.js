import React from 'react'
import { useState } from 'react';
// import { Dropdown } from 'react-bootstrap';
import bLogo from '../images/logo_blue.png'
import { Link } from 'react-router-dom';
import '../styles/builderMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faUsers, faBell, faPencilRuler, faClipboardList, faChartBar, faCog} from '@fortawesome/free-solid-svg-icons';

const BuilderMenu = (props) => {

    const [isActive, setActive] = useState("false");
    const [icons, setIcon] = useState("false"); 
    const handleToggle = () => {
    setActive(!isActive);
    
    setIcon(!isActive)
    };
  
    return (
        <>
        <nav id="header-navB" className="navbar navbar-inverse navbar-default visible-xs builder_nav">
  <div className="container-fluid">
  	<div className="navbar-header ms-3 w-100">
        <div className='row'>
        <div className='col-md-3'>
	    <Link to="/paymentsetup"><img className='whiteSide_logoB' src={bLogo} alt="Logo" /></Link>
        <FontAwesomeIcon id="sidebarTogglebtnB" onClick={handleToggle} icon={icons ? faBars : faTimes} className="toggle-btnB ms-5" />
        </div>
        <div className='col-md-6 text-center'>
        <div className='mt-2'>
        <span className='mx-3'>Build</span>
        <span className='mx-3'>Setting</span>
        <span className='mx-3'>Publish</span>
        </div>
        </div>

        <div className='col-md-3'></div>
        </div>

    </div>
  </div>
</nav>
<div id="sidebar-wrapperB" className={`p-4  ${isActive ? null : "active"}`}>
	
	<div className="sidebar-headerB">
		<i className="fa fa-2x fa-times sidebar-close"></i>
	</div>
    
	<div className="sidebar-menuB">
    <button type="button" class="btn btn_four w-100">Back to form list</button>
    <p className='builderNavTitleB mb-1 mt-3'>Main Elements</p>
	<ul>
        {/* <li className="active"><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faHome} /></span>Dashboard</Link></li> */}
		<li><Link to="" onClick={props.data}><span><FontAwesomeIcon className="" icon={faUsers} /></span>Header</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faBell} /></span>Full Name</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faPencilRuler} /></span>Email</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faClipboardList} /></span>Address</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faChartBar} /></span>Phone Number</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faCog} /></span>Date Picker</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faCog} /></span>Signature</Link></li>
        
	</ul> 

    <p className='builderNavTitleB mb-1 mt-3'>Basic Elements</p>
    <ul>
        {/* <li className="active"><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faHome} /></span>Dashboard</Link></li> */}
		<li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faUsers} /></span>Text Area</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faBell} /></span>Radio Button</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faPencilRuler} /></span>Check Box</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faClipboardList} /></span>Number</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faChartBar} /></span>Drop Down</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faCog} /></span>Image Upload</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faCog} /></span>File Upload</Link></li>
        
	</ul>
    <p className='builderNavTitleB mb-1 mt-3'>Page Elements</p>
    <ul>
		<li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faUsers} /></span>Divider</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faBell} /></span>Page Break</Link></li>
        
	</ul>

	</div>
</div>

{/* <div id="content-wrapper">Main Content</div>   */}
        </>
    )
}

export default BuilderMenu