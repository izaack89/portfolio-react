import React, { useState } from 'react';
import Header from './Header/index';
import Footer from './Footer/index';
import Portfolio from './pages/Portfolio/index';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex flex-column h-100">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}

      <Footer/>
    </div>
  );
}
