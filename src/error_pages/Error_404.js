import React from 'react';

// 404 error page component
const Error_404 = () => (
  <div className="error-container">
    <h3>404</h3>
    <h2>Sorry!</h2>
    <h6>The page you are looking for was not found</h6>
    <div className= "back-btn">
      <a href = "/">
        <button>Go to the homepage</button>
      </a>
    </div>
  </div>
);

export default Error_404;