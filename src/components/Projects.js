import React, {useState} from 'react';
import Modal from './Modal';


export default function Projects(){

    const [active, setActive] = useState(false)

    const toggle = () => {
      setActive(!active);
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
            type="button"
            className="link-target"
            id="link-1"
            onClick={toggle}
            >
              <div>
                <div className="title">Crowfund Landing Page</div>
                <div className="description">↳  React, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </div>
            <div
            className="link-target"
            id="link-2"
            onClick={toggle}
            >
              <div>
                <div className="title">Easybank Landing Page</div>
                <div className="description">↳  HTML5, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </div>
            <div
           className="link-target"
           id="link-3"
           onClick={toggle}
           >
           <div>
            <div className="title">Sign-up Form</div>
            <div className="description">↳  HTML5, Sass, JavaScript, Mobile first workflow</div>
           </div>
           </div>
           <Modal 
            active={active} 
            toggle={toggle}
            repo={links[0]}
            live={links[1]}
            />
          </div>
        </section>
    )
}