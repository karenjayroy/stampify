import React from 'react'
import Stamped from './Stamped'
import NoStamp from './NoStamp'

const StampCard = props => {
    let stamp = [];
    for(let i = 0; i < props.stampCount; i += 1) {
        stamp.push(< Stamped />);
    }

    for(let i = 0; i < 10 - props.stampCount; i += 1) {
        stamp.push(< NoStamp />);
    }


    return (
    
    <div className="stampCard">
        <h3>{props.storeName}</h3> 
        {stamp}
    </div>
)}

export default StampCard;