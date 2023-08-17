import React from 'react'

export default function Footer() {
    let d = new Date()
    let currentYear = d.getFullYear()
    return (
        <footer className="footer">
            <p className="footer--credit"> &copy; {currentYear} #VanLife    </p>
        </footer>
        )
}