import React, { useEffect, useState } from 'react';
import { client } from '../prismic-config';
import SliceZone from '../components/sliceZone';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import NotFound from './NotFound';



const Page = ({match}) => {
  const [prismicDoc, setPrismicDoc] = useState(null);
  const [notFound, toggleNotFound] = useState(false);
  
  const lang  = match.params.lang
  const uid = match.params.uid

  // Get the page documents from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const pageDoc = await client.getByUID('page', uid, {lang} );
        if (pageDoc) {
          setPrismicDoc(pageDoc.data);
        } else {
          console.warn('Page document was not found. Make sure it exists in your Prismic repository');
        }
        } catch (error) {
          console.error(error);
          toggleNotFound(true);
        }
    }
  
      fetchPrismicData();
  }, [uid,lang]);

  if (prismicDoc) {
    const data = prismicDoc.page_content;
    
    return (
      <div>
        <Header lang={lang} uid ={uid}/>
        <div className = "container">
          <SliceZone sliceZone={data} />
        </div>
        <Footer/>
      </div>
    );
  } else if (notFound) {
      return <NotFound/>
  }
   return null;
}
  
  
export default Page;