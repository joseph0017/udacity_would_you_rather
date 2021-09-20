import React from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'

const TabNavbar = () => {
    return (
        <>
            <nav className = "navbar"> 
            <div className = "navbar-container">
                <ul className = "nav-menu active">
                    <li className = "nav-item">
                    <Link to ="/unanswered-tab" className = "nav-links">
                        Unanswered Questions
                    </Link>
                    </li>
                    <li className = "nav-item">
                    <Link to ="/answered-tab" className = "nav-links" >
                       Answered Questions
                    </Link>
                    </li>
                </ul>
            </div>
            </nav>
        </>
    )
}

export default TabNavbar
