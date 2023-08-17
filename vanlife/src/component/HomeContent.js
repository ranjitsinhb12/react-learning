import React from 'react'
import {Link} from 'react-router-dom'

export default function HomeContent() {
    let background = "../images/home-background.png"
    return (
        <main className="main" style={{backgroundImage: `url(${background})`}}>
            <article className="main--hero">
                <h2 className="main--hero__heading">
                    You got the travel plans, we got the travel vans.
                </h2>
                <p className="main--hero__details">
                    Add adventure to your life by joining the #vanlife movement.
                    Rent the perfect van to make your perfect road trip.
                </p>
                <Link to="/vans"><button className="main--hero__button">
                    Find your van
                </button></Link>
            </article>            
        </main>
        )
}