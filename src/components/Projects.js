import React from 'react';
import ReactDOM from 'react-dom';
import bg1 from "../assets/easy-bank-bg.png";
import bg2 from "../assets/form-bg.png";
import bg3 from "../assets/launcher-bg.png"

export default function Projects(){
    return(
        <div className="projects">
          <h2>some of my projects...</h2>
          <div 
          className="project-box"
          style={{backgroundImage: `url(${bg1})`}}
          >
          </div>
          <div 
          className="project-box"
          style={{backgroundImage: `url(${bg2})`}}
          >
          </div>
          <div 
          className="project-box"
          style={{backgroundImage: `url(${bg3})`}}
          >
          </div>
        </div>
    )
}