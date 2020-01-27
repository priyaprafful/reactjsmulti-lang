import React, { useEffect, useState } from 'react';
import { client } from '../prismic-config';
import SliceZone from '../components/sliceZone';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Error_404 from '../error_pages/Error_404';
import ErrorGeneric  from '../error_pages/ErrorGeneric';

//Page component for all pages under homepage tree, parameters passed - language and uid of page
const Page = ({match}) => {
  const [prismicDoc, setPrismicDoc] = useState(null);

  //Error page handling variables
  const [pageNotFound, docError] = useState(false);
  const [errorFound, genericError] = useState(false)

  //Params section
  const lang  = match.params.lang;
  const uid = match.params.uid;

  // Get the page documents from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const pageDoc = await client.getByUID('page', uid, {lang} );
        if (pageDoc) {
          setPrismicDoc(pageDoc);
        } else {
          docError(true);
        }
      } catch (error) {
          console.error(error);
          genericError(true);
      }
    }
    fetchPrismicData();
  }, [uid,lang]);
  //Check if Prismic doc is received
  if (prismicDoc) {
    
    const data = prismicDoc.data.page_content;
    return (
      <div>
        <Header lang={lang} altLanguages = {prismicDoc.alternate_languages}/>
        <div className = "container">
          <SliceZone sliceZone={data} />
        </div>
        <Footer/>
      </div>
    );
  } else if (pageNotFound) {
      return <Error_404/>
  } else if (errorFound) {
    return <ErrorGeneric />
  }
  return null;
}
  
export default Page;