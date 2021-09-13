import React, {useRef} from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Portrait from '../assets/emiliano.jpg'


export default function About() {

    const ref = useRef();

    return (
        <section className="about" id="about">
            <h2>
                hello<span className="special">,</span> world<span className="special">!</span>
            </h2>
            <Flippy
           flipOnHover={false} 
           flipOnClick={false}
           flipDirection="horizontal"
           ref={ref}
            >
                <FrontSide>
                    <figure>
                    <img 
                    src={Portrait}
                    alt="Developer portrait"
                    className="portrait"
                    >
                    </img>
                    <figcaption>
                            👋 Emi here! React frontend developer, based on La Plata, Buenos Aires, Argentina.
                    </figcaption>
                    <button
                    onClick={() => { ref.current.toggle(); }}  >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="toggle-arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                    </button>
                    </figure>
                </FrontSide>
                <BackSide>
                    <div className="backfigure">
                    <h3>About me:</h3>
                    <p className="about-text">Since I was a young boy, the technological world and internet have been of my attention. For this reason, I have a natural interest for web design and development.</p>
                    <p className="about-text">It's my goal to unfold my capabilities and skills in the IT labor field, while I deepen my knowledge and broaden my horizons.</p>
                    <button
                    onClick={() => { ref.current.toggle(); }}
                    >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="toggle-arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
                    </button>
                    </div>
                </BackSide>
            </Flippy>
        </section>
    );
}