import React from 'react';
import './BackgroundVideo.css'; // Import the CSS for styling
import video_src from '../Photos/traditional_video.mp4';
const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src={video_src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="overlay">
        <h1>Your festive essentials, all in one place</h1>
        <button className="shop-button">Shop Now</button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
