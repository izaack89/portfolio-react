import React from 'react';
// Added fontawesome in order to user their icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer py-3 bg-light mt-auto">
        <div className="container-fluid">
            <div className="row text-muted">
                <div className="col-6 text-start">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="footerlinkClass" href="https://github.com/izaack89">
                                <FontAwesomeIcon icon={["fab", "github"]}  size="lg"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="footerlinkClass" href="https://www.linkedin.com/in/german-isaac-ramirez-casta%C3%B1on-4835b030/">
                            <FontAwesomeIcon icon={["fab", "linkedin"]}   size="lg" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="footerlinkClass" href="+525527117864">
                                <FontAwesomeIcon icon={faPhone}  size="lg"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="footerlinkClass" href="mailto:mitsuominagi@gmail.com">
                                <FontAwesomeIcon icon={faEnvelopeOpenText}  size="lg"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="footerlinkClass" href="https://stackexchange.com/users/20052148/german-ramirez">
                            <FontAwesomeIcon icon={["fab", "stack-overflow"]}  size="lg"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 text-end">
                    <p className="mb-0 footer-text ">
                        2021© - <a href="https://github.com/izaack89">German Ramirez</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
}