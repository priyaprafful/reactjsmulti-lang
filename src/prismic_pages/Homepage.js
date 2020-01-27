import React, { useEffect, useState } from 'react';
import { client } from '../prismic-config';
import SliceZone from '../components/sliceZone';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Error_404 from '../error_pages/Error_404';
import ErrorGeneric from '../error_pages/ErrorGeneric';

//Home page component 
const Homepage = ({match}) => {
  const [prismicDoc, setPrismicDoc] = useState(null);

  //Error page handling variables
  const [pageNotFound, docError] = useState(false);
  const [errorFound, genericError] = useState(false)
  
  //params section
  const  lang  = match.params.lang;

  //Get the homepage documents from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const homeDoc = await client.getSingle( "homepage", {lang});
        if (homeDoc) {
          setPrismicDoc(homeDoc);
        } else {
          console.warn(' Home page document was not found. Make sure it exists in your Prismic repository');
          docError(true);
        }
      } catch (error) {
          console.error(error);
          genericError(true);
      }
    } 
    fetchPrismicData();
  }, [lang]);

  //Check if Prismic doc is received
  if (prismicDoc) {
    const data = prismicDoc.data.page_content;
    
    return (
      <div>
        <Header lang={lang} altLanguages={prismicDoc.alternate_languages}/>
        <div className = "container">
          <SliceZone sliceZone={ data } />
        </div>
        <Footer/>
      </div>
    );
  } else if (errorFound) {
      return <ErrorGeneric />;
  } else if (pageNotFound) {
      return <Error_404/>
  }   
  return null
}
  
export default Homepage;