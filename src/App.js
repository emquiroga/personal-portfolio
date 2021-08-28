import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkAndStudies from './components/Work-and-Studies';

function App() {
    return (
        <React.Fragment>    
            <Home />
            <About />
            <WorkAndStudies />
            <Skills />
            <Projects />
            <Contact />
        </React.Fragment>   
    )
};
export default App;