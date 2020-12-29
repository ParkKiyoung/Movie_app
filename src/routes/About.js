import React from 'react';
import './About.css';

function About(props){
    console.log(props)
    return (
        <div className="about__container">
            <span>
                "시작이 느리기 때문에 더열심히 해야해"
            </span>
            <span>
                20201229
            </span>
        </div>
    )
}

export default About;