import React from 'react';
import ReactDOM from 'react-dom/client';

function MainContent() {
    return (
        <div className="MainContent">
            <h1 className="Title"> Laura Smith </h1>
            <div className="JobTitle">
                Frontend Developer
            </div>
            <div className="Website">
                laura.website.com
            </div>
            <button class="EmailButton">
               Email
            </button>
            <div className="Content-Me">
                <h3 className="Content-Me--Heading"> About </h3>
                <p className="About-Details">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h3 className="Content-Me--Heading"> Interests </h3>
                <p className="About-Details">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>

        </div>
        )
}

export default MainContent;