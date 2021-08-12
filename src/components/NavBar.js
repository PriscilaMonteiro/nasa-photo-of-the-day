import React from"react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/nasaphoto">APOD</Link>
                <Link className="link" to="/searchnasaphoto">Search</Link>

            </ul>
        </div>
    )
}