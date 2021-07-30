import React, { useState } from 'react';


function NavBar({ currentPage, handlePageChange }) {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"  onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h2><a className="navbar-brand" href="#about">German Ramirez</a></h2>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a
                                    href="#about"
                                    onClick={() => handlePageChange('About')}
                                    className={currentPage === 'About' ? 'nav-link linkClass linkClassActive' : 'nav-link linkClass'}
                                >
                                    About Me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#blog"
                                    onClick={() => handlePageChange('Portfolio')}
                                    className={currentPage === 'Portfolio' ? 'nav-link linkClass linkClassActive' : 'nav-link linkClass'}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#contact"
                                    onClick={() => handlePageChange('Contact')}
                                    className={currentPage === 'Contact' ? 'nav-link linkClass linkClassActive' : 'nav-link linkClass'}
                                >
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#resume"
                                    onClick={() => handlePageChange('Resume')}
                                    className={currentPage === 'Resume' ? 'nav-link linkClass linkClassActive' : 'nav-link linkClass'}
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
}
export default NavBar;