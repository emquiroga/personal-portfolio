import React, {useState} from 'react';
import Modal from './Modal';

export default function Projects({repo1, repo2, repo3, live1, live2, live3}){

    const [active, setActive] = useState(false)
    const [repo, setRepo] = useState('')
    const [live, setLive] = useState('')

    //This function get the correct links for modal
    const getLinks = (event) => {
     let myLink = (event.target.className).slice(5);
     let links = {
       repo: '',
       live: ''
     }
     if (myLink == 1){
       links.repo = repo1;
       links.live = live1;
     } if (myLink == 2){
      links.repo = repo2;
      links.live = live2;
     } if (myLink == 3){
      links.repo = repo3;
      links.live = live3;
     }
     return links;
    }
    //This function makes the toggle for modal component
    //plus get the links from the targeted div
    //and set no-scroll to body when active
    const toggle = (number) => {
      setActive(!active)
      const links = getLinks(number)
      setRepo(links.repo)
      setLive(links.live)
      document.getElementById('body').classList.toggle('no-scroll')
    }
    
    return(
        <section className="projects">
          <h2>latest pro<span className="special">j</span>ect<span className="special">s</span></h2>
          <div className="projects-wrapper">
            <div
            className="link-target"
            id="link-1"
            >
              <div>
                <div 
                 className="title 1"
                 onClick={toggle}
                 >Crowfund Landing Page</div>
                <div className="description">↳  React, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </div>
            <div
            className="link-target"
            id="link-2"
            >
              <div>
                <div 
                className="title 2"
                onClick={toggle}
                >Easybank Landing Page</div>
                <div className="description">↳  HTML5, Sass, JavaScript, Mobile first workflow</div>
              </div>
            </div>
            <div
           className="link-target"
           id="link-3"
           >
           <div>
            <div 
            className="title 3"
            onClick={toggle}
            >Sign-up Form</div>
            <div className="description">↳  HTML5, Sass, JavaScript, Mobile first workflow</div>
           </div>
           </div>
           <Modal 
            active={active} 
            toggle={toggle}
            repo={repo}
            live={live}
            />
          </div>
        </section>
    )
}