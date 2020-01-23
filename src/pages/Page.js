import React, { useEffect, useState } from 'react';
import { client } from '../prismic-config';
import SliceZone from '../components/sliceZone';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';



const Page = ({match}) => {
  const [prismicDoc, setPrismicDoc] = useState(null);
  
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
  } else {
      return null;
  }
   
}
  
  
export default Page;