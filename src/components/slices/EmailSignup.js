import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-config'

const EmailSignup = ({ slice }) => (
  <section>
    <div className="email-signup">
      <RichText render={slice.primary.email_title}/>
      <RichText 
        render={slice.primary.email_text}
        linkResolver={linkResolver}
      />
    </div>

    <div className="signup-content">
      <RichText 
        render={slice.primary.label}
        linkResolver={linkResolver}
      />
      <input placeholder={slice.primary.placeholder} />
      <div className="newsletters-btn">
        <RichText 
          render={slice.primary.button_text} 
          linkResolver={linkResolver}
        />
      </div>
    </div>
  </section>
);

export default EmailSignup;