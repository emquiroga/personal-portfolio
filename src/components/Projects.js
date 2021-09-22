import React, {useState} from 'react';
import Modal from './Modal';


export default function Projects(){

    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    const toggle1 = () => {
      setActive1(!active1);
    }
    const toggle2 = () => {
      setActive2(!active2);
    }
    const toggle3 = () => {
      setActive3(!active3);
    }
    const links = [
      "https://github.com/emquiroga/crowdfunding-product-page-main",
      "https://relaxed-noether-77d0b1.netlify.app/",
      "https://github.com/emquiroga/easybank-landing-page",
      "https://emquiroga.github.io/easybank-landing-page/",
      "https://github.com/emquiroga/intro-component-with-signup-form-master",
      "https://emquiroga.github.io/intro-component-with-signup-form-master/"    
      ];
   
    return(
        <section className="projects">
          <h2>latest pro<span className="special">j</span>ect<span className="special">s</span></h2>
          <div className="projects-wrapper">
            <div
            className="link-target"
            id="link-1"
            onClick={toggle1}
            >
              <div>
                <div className="title">Crowfund Landing Page</div>
                <div className="description">↳  React, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </div>
            <div
            className="link-target"
            id="link-2"
            onClick={toggle2}
            >
              <div>
                <div className="title">Easybank Landing Page</div>
                <div className="description">↳  HTML5, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </div>
            <div
           className="link-target"
           id="link-3"
           onClick={toggle3}
           >
           <div>
            <div className="title">Sign-up Form</div>
            <div className="description">↳  HTML5, Sass, JavaScript, Mobile first workflow</div>
           </div>
           </div>
           <Modal 
            active={active1} 
            toggle={toggle1}
            repo={links[0]}
            live={links[1]}
            />
              <Modal 
            active={active2} 
            toggle={toggle2}
            repo={links[2]}
            live={links[3]}
            />
              <Modal 
            active={active3} 
            toggle={toggle3}
            repo={links[4]}
            live={links[5]}
            />
          </div>
        </section>
    )
}