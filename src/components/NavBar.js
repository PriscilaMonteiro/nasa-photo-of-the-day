import React from"react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/nasaphoto">APOD</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/searchnasaphoto">Search</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}