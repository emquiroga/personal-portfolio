import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkAndStudies from './components/Work-and-Studies';
import Portal from './components/Portal'

function App() {
    return (
        <React.Fragment>    
            <Home />
            <About />
            <WorkAndStudies />
            <Skills />
            <Projects />
            <Contact />
            <Portal />
        </React.Fragment>   
    )
};
export default App;