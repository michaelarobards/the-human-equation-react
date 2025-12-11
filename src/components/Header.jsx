import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="site-header">
            <nav className="nav-container">
                <Link to="/" className="logo">
                    The Human Equation
                </Link>

                <div className="nav-links">
                    <Link to="/groups">Groups</Link>
                    <Link to="/weekly-schedule">Schedule</Link>
                    <Link to="/membership">Membership</Link>
                    <Link to="/insight">Insight Series</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
}
