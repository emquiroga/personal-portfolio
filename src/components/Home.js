import React from 'react';
import useDarkMode, { DarkModeToggler } from 'use-dark-mode-hook'


export default function Home() {
    const [isDarkMode, toggleDarkMode] = useDarkMode()
    return (
    <section
    className="home"
    id="home"
    >
        <DarkModeToggler 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
            buttonClassName="theme-toggler"
        />
        <h1 className="">EMILIANO QUIROGA</h1>
        <h3 className="">frontend developer</h3>
        <a href="#about"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-down" className="" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#f2e8e3" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg></a>
    </section>
    );
}