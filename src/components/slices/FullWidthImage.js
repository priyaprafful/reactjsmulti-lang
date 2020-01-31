import React from 'react';

const FullWidthImage = ({ slice }) => {
  var backgroundImage = "full-width-image-right"
  if (slice.primary.background_image_position) {
    backgroundImage = `full-width-image-${slice.primary.background_image_position}`
  } 
  return (
    <section className="image-container">
      <div className={backgroundImage}>
        <img 
          className="back-img" 
          src={slice.primary.background_image.url} 
          alt={slice.primary.background_image.alt} 
        />
      </div>

      <div className="main-image">
        <img 
          src={slice.primary.layout_image.url} 
          alt = {slice.primary.layout_image.alt} 
        />
      </div>
    </section>
  );
};
  
export default FullWidthImage;