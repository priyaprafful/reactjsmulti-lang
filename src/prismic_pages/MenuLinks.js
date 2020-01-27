import React, { useEffect, useState } from 'react';
import { client,linkResolver } from '../prismic-config';
import { RichText , Link} from 'prismic-reactjs';

//Menulinks component for all menu links in header section 
const MenuLinks = ({lang, uid}) => {
  const [menuData, setMenuData] = useState(null);

  // Get the menu documents from Prismic
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
  }, [lang,uid]);

  // function createAltLink(altLang){
  //   return "/"+altLang+"/"+uid;
  // }
  if (menuData) {
    return (
      <nav className="main-nav">
        <ul>
          {/* Current lanaguage links generation  */}
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
          {menuData.alternate_languages.map((altLang,index)=>{
            return (
              <li  key = {index}>
                <a href = {linkResolver(altLang)}>
                  <p className={"flag-icon flag-icon-" + altLang.lang.slice(-2)}></p>
                </a> 
              </li>
              )
            })
          }
        </ul>
      </nav>
    );
  } else {
    return null;
  }
}
export default MenuLinks;