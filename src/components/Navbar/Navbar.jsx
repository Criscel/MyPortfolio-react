import React from 'react';
import { BrowserRouter as Router,Link  } from "react-router-dom"
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar-container">
                <h1>CRISCEL</h1>
            <Router>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/About">About Me</Link>
                <Link className="link" to="/Portfolio">Portfolio</Link>
                <Link className="link" to="/Contact">Contact Me</Link>
            </Router>
            </nav>
    )
}

export default Navbar
