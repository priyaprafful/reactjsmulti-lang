import React from 'react';

//Error page for generic errors
const ErrorGeneric = () => (
  <div className="error-container">
    <h4>Something went wrong. </h4>
    <nav>
      <ul>
        <li>Please check your Prismic endpoint configuration in the src/prismic-config.js file. 
          It might be incorrect.</li>
        <li>Please check that your Custom Type API ID is correctly defined in the queries.</li>
        <li>Check the console for errors.</li>
      </ul>
    </nav>
  </div>
);

export default ErrorGeneric;