import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-config'

const CalltoAction = ({ slice }) => {
  return (
    <section>
      <div className="call-to-action">
        {RichText.render(slice.primary.action_title)}
        {RichText.render(slice.primary.action_text, linkResolver)}
      </div>
      <div className="btn-content">
        <img src={slice.primary.social_button.url} 
        alt={slice.primary.social_button.alt} />
      </div>
    </section>
  );
};

export default CalltoAction;