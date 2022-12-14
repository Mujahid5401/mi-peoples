import React from 'react'
import '../styles/statistics.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Statistics = (props) => {
    console.log(props);
    return (
        <>
            <div className="col">
                <div className='sta_div'>
                <h6>{props.staTitle}</h6>
                <div className="d-flex">
                <span className='sta_icon'><FontAwesomeIcon className="" icon={props.iconSrc} /></span>
                <p className='fs-2 lh-1 mb-0 ms-3'>{props.staNmuber}</p>
                <span className="align-self-end ms-auto fsOne">View All <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></span>
                </div>
                
                </div>
            </div>
        </>
    )
}

export default Statistics
