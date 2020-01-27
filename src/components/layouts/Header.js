import React from 'react';
import MenuLinks from '../../prismic_pages/MenuLinks';

const Header = ({lang, altLanguages}) => {

  return (
    <header className="header">
      <a href="/" className = "logo-block">
        <img src="/images/check_icon.png"/>
        <h3 className ="logo-text">Todoapp</h3>
      </a>
      <MenuLinks lang={lang} altLanguages = {altLanguages}/>
    </header>
  );
}

export default Header;
