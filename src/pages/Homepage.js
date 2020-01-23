import React, { useEffect, useState } from 'react';
import { client } from '../prismic-config';
import SliceZone from '../components/sliceZone';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import NotFound from './NotFound';

const Homepage = ({match}) => {
  const [prismicData, setPrismicData] = useState(null);
  const [notFound, toggleNotFound] = useState(false);
  
  const  lang  = match.params.lang;
  
  // Get the homepage documents from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const homeDoc = await client.getSingle('homepage', {lang});
        if (homeDoc) {
          setPrismicData(homeDoc.data);
        } else {
          console.warn(' Home page document was not found. Make sure it exists in your Prismic repository');
        }
      } catch (error) {
          console.error(error);
          toggleNotFound(true);
        }
    } 
  
    fetchPrismicData();
  }, [lang]);

  if (prismicData) {
    const data = prismicData.page_content;
    
    return (
      <div>
        <Header lang={lang} uid={" "}/>
      
        <div className = "container">
          <SliceZone sliceZone={ data } />
        </div>
        <Footer/>
        </div>
       
       
    );
  } else if (notFound) {
      return <NotFound />;
    }
    return null
}
  
  
export default Homepage;