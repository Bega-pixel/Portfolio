import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
 
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Some of my Projects!</h2>
      </div>
        <Carousel showArrows={true} showThumbs={false}>
          {Slides}
        </Carousel>
    </div>
  );
};

export default Slider;