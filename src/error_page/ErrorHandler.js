import React from 'react';

//Error component for all type of errors
const ErrorHandler = ({errorState})  => {
  if (errorState) {
    if (errorState==='genericError') {

      return (
        <div className="error-container">
          <h4>Something went wrong.</h4>
            <nav>
              <ul>
                <li>Please check your Prismic endpoint configuration in the src/prismic-config.js file. 
                 It might be incorrect.</li>
                <li>Please check that your Custom Type API ID is correctly defined in the queries.</li>
                <li>Please check if the langague code in url.</li>
                <li>Check the console for errors.</li>
              </ul>
            </nav>
        </div>
      )
    } else {
      
      return(
        <div className="error-container">
          <h3>404</h3>
          <h2>Sorry!</h2>
          <h6>The page you are looking for was not found</h6>
          <div className="back-btn">
            <a href = "/">
              <button>Go to the homepage</button>
            </a>
          </div>
       </div>
      )
    }
  }
};

export default ErrorHandler;

