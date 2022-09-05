import React from "react";

import '../style.css';

function Work() {
    return (
        <section className="grid-container">
            <section className="grid-x grid-padding-x align-center work-container">
                <article className="card large-4 medium-6 small-12">
                    <div className="card-divider">
                        <h4>Bball Connection</h4>
                    </div>
                    <img 
                        src={require("../images/bballcon.png")}
                        alt="Bball Connection Wordpress Ecommerce Site." 
                    />
                    <div className="card-section">
                        <p>This site is a custom Wordpress Ecommerce site where I utilized <a href="https://underscores.me/" target="_blank" rel="noopener noreferrer">_underscores</a> to help create a custom child theme.</p>
                    </div>
                    <div className="card-divider">
                        <a href="https://staging.daniellundydev.ca/bballconnection/" className="button" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </article>
                <article className="card large-4 medium-6 small-12">
                    <div className="card-divider">
                        <h4>Easy Grocery</h4>
                    </div>
                    <img 
                        src={require("../images/easygrocery.png")}
                        alt="Ecommerce Site." 
                    />
                    <div className="card-section">
                        <p>The idea with this site was to create a mock grocery store that would utilize PHP, JS, JQuery, XHR, HTML, CSS and MySQL to display data. The results give a fully functional dynamic site.</p>
                    </div>
                    <div className="card-divider">
                        <a href="https://easygroceries.daniellundydev.ca/#/home/" className="button" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </article>
                <article className="card large-4 medium-6 small-12">
                    <div className="card-divider">
                        <h4>Internet Of Things</h4>
                    </div>
                    <img 
                        src={require("../images/iot.png")}
                        alt="Internet Of Things Project." 
                    />
                    <div className="card-section">
                        <p>This was a fun exploratory project using a BBC Micro:bit. The object was to create an interactive web based advertisement for a vacation destination. The tech stack for this was HTML, CSS and Javascript.</p>
                    </div>
                    <div className="card-divider">
                        <a href="https://daniellundydev.ca/iot" className="button" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </article>
                <article className="card large-4 medium-6 small-12">
                    <div className="card-divider">
                        <h4>The Loopy Prospector</h4>
                    </div>
                    <img 
                        src={require("../images/prospector.png")}
                        alt="Javascript Game." 
                    />
                    <div className="card-section">
                        <p>Welcome to The Loopy Propector. This is a Javascript game done with current ES6 practices. Also, utilizing CSS and HTML. The object is to see how much gold you can get before the river runs dry!</p>
                    </div>
                    <div className="card-divider">
                        <a href="https://daniellundydev.ca/loopy_prospector" className="button" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </article>
                <article className="card large-4 medium-6 small-12">
                    <div className="card-divider">
                        <h4>Task Today</h4>
                    </div>
                    <img 
                        src={require("../images/task-today.png")}
                        alt="Vue js Web Application." 
                    />
                    <div className="card-section">
                        <p>For this project I decided to tackle a simple Task taker web application. To accomplish this I chose to use Vue.js. For styling and content I used CSS and HTML and created a custom background image. One feature of the project I added was json data to give the user and inspirational qoute when using the web app.</p>
                    </div>
                    <div className="card-divider">
                        <a href="https://daniellundydev.ca/task_today" className="button" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </article>
                <article className="card large-4 medium-6 small-12">
                    <div className="card-divider">
                        <h4>Mad Movies</h4>
                    </div>
                    <img 
                        src={require("../images/mad-movies.png")}
                        alt="Movie Information Database website." 
                    />
                    <div className="card-section">
                        <p>The idea with this site was to create a functional movie database for users find information on their favorite movies. I used HTML, CSS, Javascript, JSON, XHR, and PHP coupled with MySQL to create a dynamic website. I also used Foundations CSS and sammy.js to help with the UI/UX of the site.</p>
                    </div>
                    <div className="card-divider">
                        <a href="https://daniellundydev.ca/madmovies" className="button" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </article>
            </section>
        </section>
    );
}

export default Work;