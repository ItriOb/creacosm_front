import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;