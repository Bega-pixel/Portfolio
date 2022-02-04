import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
            <h2>name</h2>
            <p>Adress</p>

        </div>

        <div className="footer-contact">
            <h3>Conntact</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim recusandae consectetur asperiores praesentium autem iusto ab inventore aspernatur eveniet? Soluta sed voluptates quaerat iure pariatur iusto voluptatum quia quidem? </p>
        </div>
        <div className="footer-sns">
            <div className="desing-by">
                <a href="">
                  <i className="fab fa-react"></i>
                </a> 
            </div>
            <div className="sns-links">
                <a href="https://www.linkedin.com/in/juan-berrondo" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Bega-pixel" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="">
                  <i className="fas fa-at" target="_blank" rel="noreferrer"></i>
                </a>
            </div>

        </div>

    </footer>
  )
};

export default Footer;
