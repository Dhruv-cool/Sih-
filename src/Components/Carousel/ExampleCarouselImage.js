import React from 'react';
import PropTypes from 'prop-types';

function ExampleCarouselImage({ src, text }) {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img
        src={src}
        alt={text}
        style={{ width: '100%', height:'100vh' , cursor:'pointer'}}
      />
      {/* Optional: Overlay text on the image */}
    
        
      
    </div>
  );
}

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
