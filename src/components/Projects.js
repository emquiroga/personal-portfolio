import React from 'react';


export default function Projects(){
    return(
        <section className="projects">
          <h2>latest pro<span className="special">j</span>ect<span className="special">s</span></h2>
          <div 
          className="project-box"
          id="project1"
          >
            <a href="https://emquiroga.github.io/easybank-landing-page/" alt="Easybank Landing Page" 
            target="_blank"
            id="link1">Easybank Landing Page</a>
            <p></p>
          </div>
          <div 
          className="project-box"
          id="project2"
          >
            <a href="https://emquiroga.github.io/intro-component-with-signup-form-master/" alt="Intro component with signup form master" 
            target="_blank"
            id="link2">Sign-up Form</a>
            <p></p>
          </div>
          <div 
          className="project-box"
          id="project3"
          >
            <a href="https://emquiroga.github.io/launch-countdown-timer-main/" alt="Launch countdown timer" 
            target="_blank"
            id="link3">Launch Countdown Timer</a>
            <p></p>
          </div>
        </section>
    )
}