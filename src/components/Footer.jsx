import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="site-footer">
            <p>© {new Date().getFullYear()} The Human Equation</p>
            <Link to="/guidelines">Community Guidelines</Link>
        </footer>
    );
}
