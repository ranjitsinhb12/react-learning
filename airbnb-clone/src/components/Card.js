import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            <img src={`./images/${props.img}`} alt="User" className="card--img" />
            <div className="card--stat">
                <img src={`./images/${props.star}`} alt="star" className="card--star" />
                <span>{props.ratinh}</span>
                <span className="grey">({props.reviewCount}) &nbsp; &bull; &nbsp; </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>
                {props.title}
            </p>
            <p>
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
        )
}