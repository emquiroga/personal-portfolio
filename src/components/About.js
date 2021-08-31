import React from 'react';
import ReactDOM from 'react-dom';
import Portrait from '../assets/portrait.jpg'

export default function About() {
    return (
        <div className="about" id="about">
            <h2>
                hello<span className="special">,</span> world<span className="special">!</span>
            </h2>
           <figure>
               <img 
               src={Portrait}
               alt="Developer portrait"
               className="portrait"
               >
               </img>
               <figcaption>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</figcaption>    
           </figure>
        </div>
    );
}