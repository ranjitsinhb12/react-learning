import React from 'react';
import tweeter from './images/tweeter.png';
import facebook from './images/facebook.png';
import insta from './images/insta.png';
import github from './images/github.png'

export default function Footer() {
    return (
        <div className="footer">
            <img src={tweeter} alt="tweeter" className="tweeter" />
            <img src={facebook} alt="tweeter" className="tweeter" />
            <img src={insta} alt="tweeter" className="tweeter" />
            <img src={github} alt="tweeter" className="tweeter" />

            <br />
            <span className="credit-text">Design by Ranjitsinh Chauhan</span>
        </div>
        )
}
