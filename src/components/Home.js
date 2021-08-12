import React from 'react';
import { Link } from 'react-router-dom';

export default function home(){
    return(
        <div className = "home">
            <Link className="home-link" to="/nasaphoto"><span>The Limit Is The Sky! <br/>A.P.O.D <br/> Astronomy Picture Of The Day.</span></Link>
        </div>
        
        

    )
}