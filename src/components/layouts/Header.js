import React, { useEffect, useState } from 'react';
import { client,linkResolver } from '../../prismic-config';
import { RichText , Link} from 'prismic-reactjs';

const Header = ({ lang, altLanguages }) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const menuDoc = await client.getSingle('menu', {lang});
        if (menuDoc) {
          setMenuData(menuDoc);
        } else {
          console.warn('Menu document was not found. Make sure it exists in your Prismic repository');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPrismicData();
  }, [lang,altLanguages]);

  if (menuData) {
    return (
      <header className="header">
        <a href="/" className="logo-block">
          <img src="/images/check_icon.png" alt="website logo" />
          <h3 className="logo-text">Todoapp</h3>
        </a>
        <nav className="main-nav">
          <ul>
            {menuData.data.menu_links.map ((item,index) =>{
              return (
                <li key={index}>
                  <a href={Link.url(item.link, linkResolver)}>
                    {RichText.asText(item.label)}
                  </a>
                </li>
                )
              })
            }
            {altLanguages.map((altLang,index)=>{
              return (
                <li key = {index}>
                  <a href = {linkResolver(altLang)}>
                    <p className={"flag-icon flag-icon-" + altLang.lang.slice(-2)}></p>
                  </a> 
                </li>
              )
            })
            }
          </ul>
        </nav>
      </header>
    );
  } 
  return null 
}
export default Header ;
