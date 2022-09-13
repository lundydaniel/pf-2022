import React from "react";

import Projects from '../projects.json';

import '../style.css';

function Work() {

    return (
        <section className="grid-container main-container">
            <article className="grid-x grid-padding-x align-center work-section">
            {
                Projects && Projects.map( projects => {
                    return(
                        
                            <article className="card large-5 medium-6 small-12" key={ projects.id }>
                            <div className="card-divider">
                                <h4>{ projects.title }</h4>
                            </div>
                            <img
                                src={ projects.img }
                                alt={ projects.alt } 
                            />
                            <div className="card-section">
                                <p>{ projects.description }</p>
                            </div>
                            <div className="card-divider">
                                <a href={ projects.link } className="button" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                            </article>
                    )
                } )
            }
            </article>
        </section>
    )
}

export default Work;