import React  from 'react';
import PortfolioItem from './PortfolioItem';
import { projectData } from "./../../../projectData";

export default function Project() {

    return (
        <main className="flex-shrink-0">
            <div className="container">
            <h1 className="textContentH2 text-center pt-3">Portfolio</h1>
                <div className="row pt-2 mt-4 pb-5 mb-4">                    
                    {projectData.map((project) => {
                        return <PortfolioItem project={project}/>
                     })}           
                </div>
            </div>
        </main>
    );
}
