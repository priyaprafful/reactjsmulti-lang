import React from 'react';
import MenuLinks from './MenuLinks';

const Header = ({lang, uid}) => {
  return (
    <header className="header">
      <a href="/" className = "logo-block">
        <img src="/images/check_icon.png"/>
        <h3 className ="logo-text">Todoapp</h3>
      </a>
       <MenuLinks lang={lang} uid={uid}/>
   </header>
  );
}

export default Header;
