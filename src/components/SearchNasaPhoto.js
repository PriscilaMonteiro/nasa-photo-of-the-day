import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SearchADate from "./SearchADate";
import axios from 'axios';

const apikey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto(){
    const [photoData, setPhotoData] = useState([]);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`)
            .then(res => {
                setPhotoData(res.data);
            })
            .catch(err => {
              console.error(err);
              setError("Sorry, try again soon!");
            })

            
    }, []);

    
    
    if (!photoData) return <div />

    return (
        <>
       <NavBar />
       <SearchADate />
        <div className="nasa-photo">
            {error && <h1>{error}</h1>}
            {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} className="photo"/>
            ) : (
                <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
                />
            )}
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>    
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div> 
        </>  
      



    )
}