import React from 'react';
import "./Cover.css";

export const Cover = () => {
  return (
        <div className="cover-container">
          <video className='video' src='https://res.cloudinary.com/dazypdtba/video/upload/v1643363846/portfolio/pexels-tima-miroshnichenko-5377697_bz5upg.mp4' autoPlay loop muted/>
          <h1>Juan Berrondo</h1>
          <p>Full-Stack Developer</p>
        </div>
 )
};

export default Cover;