import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Vans from '../pages/Vans'

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/" element={<Home />}>
                <p className="nav--logo"> #VANLIFE </p>
            </Link>
            <div className="nav--bar">
                <Link to="/about" element={<About />}> About </Link>
                <Link to="/vans" element={<Vans />}> Vans </Link>
            </div>
        </nav>
    )
}