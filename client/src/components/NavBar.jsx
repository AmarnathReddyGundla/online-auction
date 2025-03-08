import React from "react";
import "./LandingPage.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
            <header className="landing-header">
                <Link className="nav-home" to="/">Online Auction</Link>
                <nav>
                <Link to="/signin" className="nav-link">Sign In</Link>
                <Link to="/signup" className="nav-link">Sign Up</Link>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/post-auction" className="nav-link">Post Auction</Link>
                </nav>
            </header>
        </>
    )
}

export default NavBar;