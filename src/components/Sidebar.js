import React from 'react'
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import bLogo from '../images/logo_blue.png'
import userImg from '../images/user.png'
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHome, faUsers, faBell, faPencilRuler, faClipboardList, faChartBar, faCog} from '@fortawesome/free-solid-svg-icons';
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {

    const [isActive, setActive] = useState("false");
    const [icons, setIcon] = useState("false"); 
    const handleToggle = () => {
    setActive(!isActive);
    
    setIcon(!isActive)
    };

    

    return (
        <>
        <nav id="header-nav" className="navbar navbar-inverse navbar-default visible-xs">
  <div className="container-fluid">
  	<div className="navbar-header ms-3 w-100">
	    <Link to="/paymentsetup"><img className='whiteSide_logo' src={bLogo} alt="Logo" /></Link>
        <FontAwesomeIcon id="sidebarTogglebtn" onClick={handleToggle} icon={icons ? faBars : faTimes} className="toggle-btn ms-5" />

        <div className="d-flex float-end">

        <Dropdown align="end">
  <Dropdown.Toggle className="profile_dropdown notification_dropdown mt-1" id="dropdown-basic">
  <span><FontAwesomeIcon className="noti_bell" icon={farBell} /></span>
  <span className='noti_badge'>2</span>
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            
        <Dropdown align="end">
  <Dropdown.Toggle className="profile_dropdown" id="dropdown-basic">
  <img className='admin_image' src={userImg} alt="Logo" /> <span className='px-3'>Admin</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        
        
        </div>

    </div>
  </div>
</nav>
<div id="sidebar-wrapper" className={`p-4  ${isActive ? null : "active"}`}>
	
	<div className="sidebar-header">
		<div className="sidebar-brand"><Link to="/paymentsetup"><img className='whiteSide_logo' src={bLogo} alt="Logo" /></Link></div>
		<i className="fa fa-2x fa-times sidebar-close"></i>
	</div>
    
	<div className="sidebar-menu">
    <span className='adminTools'>Admin Tools</span>
	<ul>
        <li className="active"><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faHome} /></span>Dashboard</Link></li>
		<li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faUsers} /></span>Screen Monitor</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faBell} /></span>Sbuscription</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faPencilRuler} /></span>Plans</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faClipboardList} /></span>Billing</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faChartBar} /></span>Report</Link></li>
        <li><Link to="/paymentsetup"><span><FontAwesomeIcon className="" icon={faCog} /></span>Settings</Link></li>
        <li><hr /></li>
	</ul> 
	</div>
</div>

{/* <div id="content-wrapper">Main Content</div>   */}
        </>
    )
}

export default Sidebar
