import React from 'react';

export default function WorkAndStudies(props) {
    return (
        <section className="work-and-studies">
            <h3>work <span className="special">&</span> experience</h3>
            <p>
            While I'm starting my career as a frontend dev, I'm leaving behind almost ten years as a gastronomic worker and as creative writer. Other jobs included customer support, data entry and language teaching (spanish & latin).
            </p>
            <a href="https://github.com/emquiroga/personal-portfolio/raw/main/src/assets/Resume.pdf" target="_blank" title="Resume (Spanish)"><button>download CV</button></a>
            <h3>studies<span className="special">,</span> interests <span className="special">&</span> hobbies</h3>
            <ul>
                <li><i className="fas fa-book"></i>literary studies & writing</li>
                <li><i className="fas fa-headphones"></i>music (guitar, vocals, playlister)</li>
                <li><i className="fas fa-palette"></i>ui/ux design</li>
                <li><i className="fas fa-language"></i>languages</li>
                <li><i className="fas fa-mug-hot"></i>cooking, barism</li>
                <li><i className="fas fa-biking"></i>biking, running</li>
            </ul>
        </section>
    )
}