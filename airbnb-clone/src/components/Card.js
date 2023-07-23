import React from 'react';

export default function Card(props) {
    let badgeText;
    if(props.openSpot === 0){
        badgeText = "SOLD OUT";
    }else if(props.location === "Online"){
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="card--img" alt="Person" />
            <div className='card--stats'>
                <img src="../images/star.png" className='card--star' alt="star" />
                <span className='grey'> {props.stats.rating} ({props.stats.reviewCount}) &bull; {props.location} </span>
            </div>
            <p>{props.tile}</p>
            <p><span className='bold'>From ${props.price}</span>/ person</p>
        </div>
        )
}