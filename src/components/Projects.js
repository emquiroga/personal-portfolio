import React, {useState} from 'react';
import Modal from './Modal';


export default function Projects({repo1, repo2, repo3, live1, live2, live3}){

    const [active, setActive] = useState(false)

    //This function get the correct links for modal
    const getLinks = (event) => {
     let myLink = (event.target.className).slice(5);
     if (myLink == 1){
       const [repo, live] = [repo1, live1]
       return [repo, live]
     } if (myLink == 2){
       const [repo, live] = [repo2, live2]
       return [repo, live]
     } if (myLink == 3){
       const [repo, live] = [repo3, live3]
       return [repo, live]
     }
    }
    //This function makes the toggle for modal component
    //plus get the links from the targeted div
    const toggle = (event) => {
      setActive(!active);
      // let myLinks = getLinks(event);
      // console.log(myLinks)
      // return myLinks;
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
            getLinks={getLinks}
            />
          </div>
        </section>
    )
}