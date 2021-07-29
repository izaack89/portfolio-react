import React from 'react';


function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#about">German Ramirez</a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0  justify-content-end">
                        <li className="nav-item">
                        <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                        About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#blog"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                        Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                        Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                        Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
export default NavBar;