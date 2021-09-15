import React from 'react';

export default function WorkAndStudies(props) {
    return (
        <section className="work-and-studies">
            <div className="work">
            <h3>work <span className="special">&</span> experience</h3>
            <p>
            While I'm starting my career as a frontend dev, I'm leaving behind almost ten years as a gastronomic worker and as creative writer. Other jobs included customer support, data entry and language teaching (spanish & latin).
            </p>
            <a href="https://github.com/emquiroga/personal-portfolio/raw/main/src/assets/Resume.pdf" target="_blank" title="Resume (Spanish)"><button>download resume</button></a>
            </div>
            <div className="studies-and-hobbies">
            <h3>studies<span className="special">,</span> interests <span className="special">&</span> hobbies</h3>
            <ul>
                <li>literary studies & writing</li>
                <li>music (guitar, vocals, playlister)</li>
                <li>ui/ux design</li>
                <li>languages</li>
                <li>cooking, barism</li>
                <li>biking, running</li>
                <li>videogames</li>
                <li>cats (of course!)</li>
            </ul>
            </div>
        </section>
    )
}