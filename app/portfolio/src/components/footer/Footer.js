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
          <h3>Let&#39;s create something amazing together!</h3>
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
