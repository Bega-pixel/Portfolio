import React, { Component } from 'react';
import "./Slider.css";

const slidesInfo = [
  {
    id:1,
    src:
    "https://res.cloudinary.com/dazypdtba/image/upload/v1644395468/portfolio/portPro1_xvivw0.jpg",
    alt: "Project 1",
    desc: "Game",
    href:
    "https://bega-pixel.github.io/Game/",
  },
  {
    id:2,
    src:
      "https://res.cloudinary.com/dazypdtba/image/upload/v1644394701/portfolio/porPro2_tfygmd.jpg",
    alt: "Project 2",
    desc: "PetPortal",
    href:"https://pet-portal-web.herokuapp.com",
  },
  {
    id:3,
    src:
      "https://res.cloudinary.com/dazypdtba/image/upload/v1644049748/portfolio/pexels-pixabay-248515_qtyphp.jpg",
    alt: "Project 3",
    desc: "Project 3",
    href:"",
  },
];

const slides = slidesInfo.map((slide) => (
  <a href={slide.href}>
  <div className="slide-container" key={slide.id}>
    <img id={slide.id} src={slide.src} alt={slide.alt} />
    <p className="legend">{slide.desc}</p>
    <div className="slide-desc">
    </div>
  </div>
  </a>
));

export default slides;