import React from 'react'
import Sidebar from '../components/Sidebar';
import Statistics from '../components/Statistics';
import DashTable from '../components/DashTable';
import { faClipboardList, faPoll, faExclamationCircle, faSync } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    return (
        <>
        
           <Sidebar /> 
           <div className='' id="content-wrapper"><h1>Dashboard Page</h1>
           <div className="container-fluid">
           <div className="row">
           <Statistics iconSrc={faClipboardList} staTitle="Clear Results" staNmuber="135" />
           <Statistics iconSrc={faPoll} staTitle="Results W/Alerts" staNmuber="15" />
           <Statistics iconSrc={faExclamationCircle} staTitle="Mising Info" staNmuber="12" />
           <Statistics iconSrc={faSync} staTitle="Result Processing" staNmuber="09" />
           </div>

           <DashTable />
           </div>
           
           </div>
        </>
    )
}

export default Dashboard
