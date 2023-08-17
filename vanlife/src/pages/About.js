import React from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import AboutContent from '../component/AboutContent'

export default function About() {
    return (
        <main className="main--about">
            <Nav />
            <AboutContent />
            <Footer />
        </main>
        )
}