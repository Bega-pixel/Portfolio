import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    id:1,
    src:
      "https://res.cloudinary.com/dazypdtba/image/upload/v1643904336/portfolio/slide1_t0ycka.jpg",
    alt: "Project 1",
    desc: "Project 1",
  },
  {
    id:2,
    src:
      "https://res.cloudinary.com/dazypdtba/image/upload/v1643904382/portfolio/slide2_jdf7yu.jpg",
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    id:3,
    src:
      "https://res.cloudinary.com/dazypdtba/image/upload/v1643904461/portfolio/slide3_duyuq9.jpg",
    alt: "Project 3",
    desc: "Project 3",
  },[],
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img id={slide.id} src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;