import React from 'react';


export default function Projects(){


    return(
        <section className="projects">
          <h2>latest pro<span className="special">j</span>ect<span className="special">s</span></h2>
          <div className="projects-wrapper">
            <a href="https://relaxed-noether-77d0b1.netlify.app/" 
            title="Crowfund (Product Landing Page)" 
            alt="Product landing page coded with react and sass. Challenge from Frontend Mentor" 
            target="_blank"
            className="link-1"
            >
              <div>
                <div className="title">Crowfund Landing Page</div>
                <div className="description">↳  React, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </a>
            <a href="https://emquiroga.github.io/easybank-landing-page/" 
            title="Easybank (Landing Page)"
            alt="Bank landing page coded with html, sass and javascript. Challenge from Frontend Mentor" 
            target="_blank"
            className="link-2">
              <div>
                <div className="title">Easybank Landing Page</div>
                <div className="description">↳  HTML5, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </a>
            <a href="https://emquiroga.github.io/intro-component-with-signup-form-master/" 
            title="Intro component with signup form master"
            alt="Signup form, developed with html, sass and javascript validation" 
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