import React from 'react';
import NavBar from './NavBar';

export default function home(){
    return(
      <>  
        <NavBar/>
        <div >
            <h1>Astronomy Picture Of the Day - APOD</h1>
            <p>Can you believe that one of the most popular websites at NASA is the Astronomy Picture of the Day?<br/> In fact, this website is one of the most popular websites across all Federal Agencies.<br/> It has the popular appeal of a Justin Bieber video!!! </p>
            <p>I hope you have fun exploring the universe!</p>
        </div>
        <div>
          <a
						className='about-anchor'
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/PriscilaMonteiro'>
						GitHub
					</a>
        </div>
      </> 
        

    )
}