import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        <main className="flex-shrink-0">
            <div className="container">
                <div className="row pt5">
                    <h1 className="textContentH2 text-center">Resume</h1>
                    <p className="text-center">
                        <a className="linkClassActive"  href={process.env.PUBLIC_URL + '/assets/pdf/CV-GermanRamirezCastañon.pdf'} >
                            Download my resume <FontAwesomeIcon icon={faFilePdf}  size="lg"/>
                        </a>
                    </p>                    
                </div>
                <div className="row pt-1 pb-5">
                    <div className="col-6">
                        <h4 className="textContentH4">Back-End</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">PHP (Core, Laravel, Symphony, Smarty)</li>
                            <li class="list-group-item">Java (Spring)</li>
                            <li class="list-group-item">.Net</li>
                            <li class="list-group-item">NodeJs</li>
                            <li class="list-group-item">ApolloServer</li>
                        </ul>
                    </div>
                    <div className="col-6 text-center" style={{ alignSelf: "center" }}>
                        <img src={process.env.PUBLIC_URL + '/assets/img/code_inspection.svg'} className="img-fluid rouded w-50" alt="Code Inspections" />
                    </div>
                    <div className="col-6 text-center" style={{ alignSelf: "center" }}>
                        <img src={process.env.PUBLIC_URL + '/assets/img/javascript_frameworks.svg'} className="img-fluid rouded w-50" alt="JavaScript Frameworks" />
                    </div>
                    <div className="col-6">
                        <h4 className="textContentH4">Front-End</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">HTML5</li>
                            <li class="list-group-item">Css3</li>
                            <li class="list-group-item">Bootstrap</li>
                            <li class="list-group-item">Materialize</li>
                            <li class="list-group-item">Javascript</li>
                            <li class="list-group-item">React</li>
                            <li class="list-group-item">Sequelize</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <h4 className="textContentH4">DB</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Mysql</li>
                            <li class="list-group-item">SQL</li>
                            <li class="list-group-item">PostgressSQL</li>
                            <li class="list-group-item">MongoDB</li>
                            <li class="list-group-item">Oracle</li>
                            <li class="list-group-item">Firebase</li>
                            <li class="list-group-item">IndexDB</li>
                        </ul>
                    </div>
                    <div className="col-6 text-center" style={{ alignSelf: "center" }}>
                        <img src={process.env.PUBLIC_URL + '/assets/img/db.svg'} className="img-fluid rouded w-50" alt="Data Base" />
                    </div>
                    <div className="col-6 text-center" style={{ alignSelf: "center" }}>
                        <img src={process.env.PUBLIC_URL + '/assets/img/version_control.svg'} className="img-fluid rouded w-50" alt="Version Control" />
                    </div>
                    <div className="col-6">
                        <h4 className="textContentH4">Version Control</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">CVS</li>
                            <li class="list-group-item">SVN</li>
                            <li class="list-group-item">GitHub</li>
                            <li class="list-group-item">GitLab</li>
                            <li class="list-group-item">Bitbucket</li>
                            <li class="list-group-item">Docker</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <h4 className="textContentH4">Testing</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Jest</li>
                            <li class="list-group-item">Selenium Laravel</li>
                            <li class="list-group-item">React Testing (react-dom)</li>
                        </ul>
                    </div>
                    <div className="col-6 text-center" style={{ alignSelf: "center" }}>
                        <img src={process.env.PUBLIC_URL + '/assets/img/testing.svg'} className="img-fluid rouded w-50" alt="Testing" />
                    </div>
                    <div className="col-6 text-center" style={{ alignSelf: "center" }}>
                        <img src={process.env.PUBLIC_URL + '/assets/img/others.svg'} className="img-fluid rouded w-50" alt="Version Control" />
                    </div>
                    <div className="col-6">
                        <h4 className="textContentH4">Other</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Linux Server</li>
                            <li class="list-group-item">Windows Server</li>
                            <li class="list-group-item">AWS (EC2, S3, ElasticBean, Route53 )</li>
                            <li class="list-group-item">Tableau Server</li>
                            <li class="list-group-item">Tableau Dashboards</li>
                            <li class="list-group-item">GraphQL</li>
                            <li class="list-group-item">Webpackage</li>
                            <li class="list-group-item">ServiceProvider</li>
                            <li class="list-group-item">API's (docuSign, Twillio, Zillow, many others)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
