import React from 'react';

export default function WorkAndStudies(props) {
    return (
        <section className="work-and-studies">
            <div className="work">
            <h2>work <span className="special">&</span> experience</h2>
            <p>
            While I'm starting my career as a frontend dev, I'm leaving behind almost ten years as a gastronomic worker and as creative writer. Other jobs included customer support, data entry and language teaching (spanish & latin).
            </p>
            <div className="link-box">
            <a href="https://www.linkedin.com/in/emquiroga/" target="_blank" title="Linkedin"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="link-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#1a4231" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
            <a href="https://github.com/emquiroga/personal-portfolio/raw/main/src/assets/Resume.pdf" target="_blank" title="Resume (Spanish)"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-pdf" className="link-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#1a4231" d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path></svg></a>
            </div>
            </div>
            <div className="studies-and-hobbies">
            <h2>studies<span className="special">,</span> interests <span className="special">&</span> hobbies</h2>
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