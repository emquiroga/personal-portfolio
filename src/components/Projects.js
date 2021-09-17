import React from 'react';


export default function Projects(){

    return(
        <section className="projects">
          <h2>latest pro<span className="special">j</span>ect<span className="special">s</span></h2>
          <div className="projects-wrapper">
            <a href="https://relaxed-noether-77d0b1.netlify.app/" alt="Crowfund (Product Landing Page)" 
            target="_blank"
            className="link-1">
              <div>
                <div className="title">Crowfund Product Landing Page</div>
                <div className="description">↳  React, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </a>
            <a href="https://emquiroga.github.io/easybank-landing-page/" alt="Easybank (Landing Page)" 
            target="_blank"
            className="link-2">
              <div>
                <div className="title">Easybank Landing Page</div>
                <div className="description">↳  HTML5, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </a>
            <a href="https://emquiroga.github.io/intro-component-with-signup-form-master/" alt="Intro component with signup form master" 
            target="_blank"
           className="link-3">
           <div>
            <div className="title">Sign-up Form</div>
            <div className="description">↳  HTML5, Sass, JavaScript, Mobile first workflow</div>
           </div>
           </a>
          </div>
        </section>
    )
}