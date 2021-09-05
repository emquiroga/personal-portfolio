import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Portrait from '../assets/portrait.jpg'
import ReactCardFlip from 'react-card-flip';

export default function About() {

    //[notFlipped, isFlipped] = useState(false);

    return (
        <section className="about" id="about">
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
               <figcaption>
        👋 Emi here! 
               </figcaption>
               <button 
               type="button"
               >Flip
               </button>    
           </figure>
        </section>
    );
}