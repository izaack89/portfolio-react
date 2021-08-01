import React from "react";
// Added fontawesome in order to user their icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioItem(props) {
    const project = props.project;
    console.log(props);
    console.log(project.imgURL);
    return (
        <div className="col-12 col-sm-6 col-lg-4 p-2" key={project.id}>
            <div className="card" style={{minHeight: "600px"}}  key={project.id} id={project.id}>
                <img src={process.env.PUBLIC_URL +"/"+project.imgURL} className="card-img-top" alt={project.imgAlt} />
                <div className="card-body">
                    <h5 className="card-title textContentH4">{project.titleModal}</h5>
                    <p className="card-text">
                        {project.bodyModalDescription}
                    </p>
                </div>
                <div className="card-footer text-muted">
                {!project.is_External && (
                    <span>
                        <a className="footerlinkClass" href={project.githubRepoLink} alt={project.githubRepoText} target='_blank'  rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "github"]}  size="lg"/>
                        </a>
                        <a className="footerlinkClass" href={project.githubPageLink} alt={project.githubPageText} target='_blank'  rel="noreferrer">
                            <FontAwesomeIcon icon={faLink} size="lg"/>
                        </a>
                    </span>
                )}  
                {project.is_External && (
                    <span>
                        <a className="footerlinkClass" href={project.externalLink} alt={project.externalLinkTitle} target='_blank'  rel="noreferrer">
                            <FontAwesomeIcon icon={faLink} size="lg"/>
                        </a>
                    </span>
                )}  
                </div>
            </div>
        </div>
    );
}
