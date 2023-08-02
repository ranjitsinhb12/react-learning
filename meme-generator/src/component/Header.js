import React from 'react';

export default function Header() {
    return(
        <header className="header">
            <img
                src="./images/troll-face.png"
                alt="Troll Face"
                className="header__logo"
            />
            <h2 className="header__title"> Meme Generator </h2>
            <h4 className="header__sub-title"> Reace Course - Project 3 </h4>
        </header>
    )
}