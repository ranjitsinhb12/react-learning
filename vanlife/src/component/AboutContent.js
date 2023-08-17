import React from 'react'
import {Link} from 'react-router-dom'

export default function AboutContent() {
    return (
        <>
            <img src="../images/van.png" alt="Caravan" />
            <article className="about--article">
                <h5 className="about--title">
                    Don’t squeeze in a sedan when you could relax in a van.
                </h5>
                <p className="about--paragraph">
                    Our mission is to enliven your road trip with the perfect travel
                    van rental. Our vans are recertified before each trip to ensure
                    your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className="about--paragraph">
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
                <section className="about--section">
                    <p className="about--section__title">
                        Your destination is waiting.<br/>
                        Your van is ready.
                    </p>
                    <Link to="/vans">
                        <button className="about--section__button">
                            Explore our vans
                         </button>
                    </Link>
                </section>
            </article>
        </>
        )
}