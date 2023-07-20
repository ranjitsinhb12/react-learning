import React from 'react';
import Zaferes from '../images/zaferes.png'
import Star from '../images/star.png';



export default function Card() {
    return (
        <div className="card">
            <img src={Zaferes} alt="User" className="card--img" />
            <div className="card--stat">
                <img src={Star} alt="star" className="card--star" />
                <span>5.0</span>
                <span className="grey">(6) &nbsp; &bull; &nbsp; </span>
                <span className="grey">USA</span>
            </div>
            <p>
                Life lessons with Katie Zaferes
            </p>
            <p>
                <span className="bold">From $136</span> / person

            </p>
        </div>
        )
}