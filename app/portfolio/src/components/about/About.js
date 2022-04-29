import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
            <h3>Hello</h3>
            <p> Passionate coder. I work hard, care about writing clean code and I
                genuinely like to Learn. I'm currently looking for the right opportunity to help
                me in a environment that will help me increase my progress in to a Full-stack
                role.</p>

            <h3>Skills</h3> 
            <p>HTML, CSS, SASS, Javascript, JQuery, React, Express, Node.js, MongoDB,
               Creative, Teamwork.</p>   
        </div>
        <div>
            <img className="about-img" src="https://res.cloudinary.com/dazypdtba/image/upload/v1646931411/portfolio/desk_eilce6.jpg" alt="about" />
        </div>
    </div>
  )
};

export default About;
