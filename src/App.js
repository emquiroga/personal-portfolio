import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

function App() {
    return (
        <React.Fragment>    
            <Home />
            <About />
            <Skills />
        </React.Fragment>   
    )
};
export default App;