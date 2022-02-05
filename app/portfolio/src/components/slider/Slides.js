import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    id:1,
    src:
    "https://res.cloudinary.com/dazypdtba/image/upload/v1644049346/portfolio/pexels-kevin-ku-577585_dzcet8.jpg",
    alt: "Project 1",
    desc: "Project 1",
  },
  {
    id:2,
    src:
      "https://res.cloudinary.com/dazypdtba/image/upload/v1644049550/portfolio/pexels-negative-space-97077_fwu3ms.jpg",
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    id:3,
    src:
      "https://res.cloudinary.com/dazypdtba/image/upload/v1644049748/portfolio/pexels-pixabay-248515_qtyphp.jpg",
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