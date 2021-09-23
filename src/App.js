//Components
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkAndStudies from './components/Work-and-Studies';
//ASSETS
import img from './assets/Portrait.jpg'

export default function App() {
    return (
        <React.Fragment>    
            <Home
            title="EMILIANO QUIROGA"
            subtitle="frontend developer" />
            <About 
            text="👋 Emi here! Frontend web developer, based on La Plata, Buenos Aires, Argentina.
            Languages and technology have been always of my attention, so I feel a natural interest about design and code. Creativity and versatility leads my way."
            img={img}/>
            <WorkAndStudies
            workText="While I'm starting my career as a frontend dev, I'm leaving behind almost ten years as a gastronomic worker and as creative writer. Other jobs included customer support, data entry and language teaching (spanish & latin)." />
            <Skills />
            <Projects 
            repo1="https://github.com/emquiroga/crowdfunding-product-page-main"
            repo2="https://github.com/emquiroga/easybank-landing-page"
            repo3="https://github.com/emquiroga/intro-component-with-signup-form-master"
            live1="https://relaxed-noether-77d0b1.netlify.app/"
            live2="https://emquiroga.github.io/easybank-landing-page/"
            live3="https://emquiroga.github.io/intro-component-with-signup-form-master/"
            />
            <Contact />
        </React.Fragment>   
    )
};
