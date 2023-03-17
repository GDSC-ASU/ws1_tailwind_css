import React from "react";
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav>
            <img src="/assets/gdsc-asu-logo.png" className="logo"/>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <p className="signin">Sign In</p>
        </nav>
    );
}

export default Navbar;
