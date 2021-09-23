import React from 'react';

export default function About({text, img}) {
    return (
        <section className="about" id="about">
            <h2>
                hello<span className="special">,</span> world<span className="special">!</span>
            </h2>
            <div className="img-wrapper">
            <img src={img} title="Portrait" alt="Portrait in colors"></img>
            </div>
            <p className="about-text">
            {text}
            </p>
        </section>
    );
}