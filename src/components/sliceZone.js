import React from 'react';
import CalltoAction from './slices/CalltoAction';
import FullWidthImage from './slices/FullWidthImage';
import IconInfoSection from './slices/IconInfoSection';
import EmailSignup from './slices/EmailSignup';
import HighLightSectioon from './slices/HighLightSection';

const SliceZone = ({ sliceZone }) => (
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case ('call_to_action'):
        return <CalltoAction slice={slice} key={`slice-${index}`} />;
      case ('full_width_image'):
        return <FullWidthImage slice={slice} key={`slice-${index}`} />;
      case ('icon_info_section'):
        return <IconInfoSection slice={slice} key={`slice-${index}`} />; 
      case ('highlight_section'):
        return <HighLightSectioon slice={slice} key={`slice-${index}`} />; 
      case ('email_signup'):
        return <EmailSignup slice={slice} key={`slice-${index}`} />;  
      default:
        return null;
    }
  })
);
  
export default SliceZone;