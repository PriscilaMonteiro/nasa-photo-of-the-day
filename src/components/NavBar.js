import React from"react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/></a>
                    <div class="container" >
                        <div class="navbar-nav">
                            
                            <Link className="nav-link" to="/">Home</Link>
                            
                            
                            <Link className="nav-link" to="/nasaphoto">APOD</Link>
                           
                            
                            <Link className="nav-link" to="/searchnasaphoto">Search</Link>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}