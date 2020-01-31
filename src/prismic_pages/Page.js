import React, { useEffect, useState } from 'react';
import { client } from '../prismic-config';
import SliceZone from '../components/sliceZone';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import ErrorHandler from '../error_page/ErrorHandler';

//Page component for all pages under homepage tree, parameters passed - language and uid of page
const Page = ({ match }) => {
  const [prismicDoc, setPrismicDoc] = useState(null);
  const [errorState, setErrorState] = useState(false)
  
  const lang = match.params.lang;
  const uid = match.params.uid;

  // Get the page documents from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const pageDoc = await client.getByUID('page', uid, {lang});

        if (pageDoc) {
          setPrismicDoc(pageDoc);
        } else {
          console.warn('Page document was not found. Make sure it exists in your Prismic repository');
          setErrorState('pageNotFound');
        }
      } catch (error) {
        console.error(error);
        setErrorState('genericError');
      }
    }

    fetchPrismicData();
  }, [uid,lang]);

  // Return the page if a document was retrieved from Prismic
  if (prismicDoc) {
    const data = prismicDoc.data.page_content;

    return (
      <div>
        <Header 
          lang={lang} 
          altLanguages={prismicDoc.alternate_languages} 
        />
        <div className="container">
          <SliceZone sliceZone={data} />
        </div>
        <Footer />
      </div>
    );
  } else if (errorState) {
    return <ErrorHandler errorState={errorState} />
  }
  return null;
}
  
export default Page;