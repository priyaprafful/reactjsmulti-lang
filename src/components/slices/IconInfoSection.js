import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-config'

const IconInfoSection = ({ slice }) => {
  return (
    <section className = "icon-info-section">
      <div>
        <img src = {slice.primary.check_icon.url} alt ={slice.primary.check_icon.alt}/>
        {RichText.render(slice.primary.info_title)}
        {RichText.render(slice.primary.info_text, linkResolver)}
      </div>
      <div className = "info-desc">
        {RichText.render(slice.primary.info_desc,linkResolver)}
      </div>
    </section>
  );
};

export default IconInfoSection;