import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-config'

const EmailSignup = ({ slice }) => {
  return (
    <section>
      <div className="email-signup">
        {RichText.render(slice.primary.email_title)}
        {RichText.render(slice.primary.email_text, linkResolver)}
      </div>
      <div className="signup-content">
        {RichText.render(slice.primary.label, linkResolver)}
        <input placeholder = {slice.primary.placeholder} />
        <div className="newsletters-btn">
          {RichText.render(slice.primary.button_text, linkResolver)}
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;