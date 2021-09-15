import React from 'react';
import Portrait from '../assets/emiliano.jpg'



export default function About() {



    return (
        <section className="about" id="about">
            <h2>
                hello<span className="special">,</span> world<span className="special">!</span>
            </h2>
            <img src={Portrait}></img>
            <p className="about-text">
            👋 Emi here! React frontend developer, based on La Plata, Buenos Aires, Argentina.
            Since I was a young boy, the technological world and internet have been of my attention. For this reason, I have a natural interest for web design and development.
            It's my goal to unfold my capabilities and skills in the IT labor field, while I deepen my knowledge and broaden my horizons.
            </p>
        </section>
    );
}