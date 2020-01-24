import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-config'

const HighLightSection = ({ slice }) => {
  return (
    <section className = "highlight-section">
      <div className = "highlight-image">
        <picture>
          <source srcSet={slice.primary.highlight_image.Mobileview.url} 
          alt={slice.primary.highlight_image.Mobileview.alt}
          media='(max-width: 500px)'/>
          <source srcSet={slice.primary.highlight_image.Tabletview.url} 
          alt={slice.primary.highlight_image.Tabletview.alt}
          media='(max-width: 1097px)'/>
          <img src={slice.primary.highlight_image.url} alt={slice.primary.highlight_image.alt} />
       </picture>
      </div>

      <div className = "highlight-content">
        <img src={slice.primary.check_icon.url} 
        alt={slice.primary.check_icon.alt} />
        {RichText.render(slice.primary.highlight_title)}
        {RichText.render(slice.primary.highlight_text, linkResolver)}
      </div>
    </section>
  );
};

export default HighLightSection;