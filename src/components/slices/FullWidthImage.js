import React from 'react';

const FullWidthImage = ({ slice }) => {
  if (slice.primary.background_image_position) {
    var backgroundImage = `full-width-image-${slice.primary.background_image_position}`
  } else {
    var backgroundImage = "full-width-image-right"
  }
  return (
    <section className = "image-container">
      <div className = {backgroundImage}>
        <img className = "back-img" src={slice.primary.background_image.url} 
        alt={slice.primary.background_image.alt} />
      </div>
      <div className = "main-image">
        <img src={slice.primary.layout_image.url} 
        alt = {slice.primary.layout_image.alt}/>
      </div>
    </section>
  );
};
  
export default FullWidthImage;