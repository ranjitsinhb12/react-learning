import React from 'react';
import profile from './images/profile.png';

export default function Photo() {
    return (
        <img src={profile} alt="Profile" className="profile--photo" />
        )
}