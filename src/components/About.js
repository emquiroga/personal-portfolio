import React from 'react';
import Portrait from '../assets/emiliano.jpg'

export default function About() {
    return (
        <section className="about" id="about">
            <h2>
                hello<span className="special">,</span> world<span className="special">!</span>
            </h2>
            <div className="img-wrapper">
            <img src={Portrait}></img>
            </div>
            <p className="about-text">
            👋 Emi here! Frontend web developer, based on La Plata, Buenos Aires, Argentina.
            Languages and technology have been always of my attention, so I feel a natural interest about design and code. Creativity and versatility leads my way.
            </p>
        </section>
    );
}