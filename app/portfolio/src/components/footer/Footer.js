import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
            <h3>Contact me!</h3>
            <p>Based in Europe</p>

        </div>

        <div className="footer-contact">
            <h3>More about me and currently working on!</h3>
        <ul>
          <li>I&#39;m interested in ...Front-End Web Development.</li>
          <li>I&#39;m currently learning ...Freecodecamp! Front End Development- Libraries: jQuery, Sass, Redux, React.</li>
          <li> Responsive Web Design- CSS grid, HTML5, Flexbox,Responsive web design.</li>
          <li>JavaScript Algorithms and Data Structures- JavaScript, ES6,Debugging,Object Oriented Programming.</li>
        </ul>

        </div>
        <div className="footer-sns">
            <div className="desing-by">
                <a href="https://github.com/Bega-pixel/Portfolio">
                  <i className="fab fa-react">Source code</i> 
                </a> 
            </div>
            <div className="sns-links">
                <a href="https://www.linkedin.com/in/juan-berrondo" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Bega-pixel" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:jonbega@protonmail.com">
                  <i className="fas fa-at" target="_blank" rel="noreferrer"></i>
                </a>
            </div>

        </div>

    </footer>
  )
};

export default Footer;
