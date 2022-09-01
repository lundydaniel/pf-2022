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
                    <a href="https://staging.daniellundydev.ca/bballconnection/" className="button" target="_blank" rel="noopener noreferrer">Learn More</a>
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
                    <p>This card makes use of the card-divider element.</p>
                </div>
                <div className="card-divider">
                    <a href="https://staging.daniellundydev.ca/bballconnection/" className="button" target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
            </article>
            <article className="card large-4 medium-6 small-12">
                <div className="card-divider">
                    <h4>I'm featured</h4>
                </div>
                {/* <img src="assets/img/generic/rectangle-1.jpg" /> */}
                <div className="card-section">
                    <p>This card makes use of the card-divider element.</p>
                </div>
            </article>
            <article className="card large-4 medium-6 small-12">
                <div className="card-divider">
                    <h4>I'm featured</h4>
                </div>
                {/* <img src="assets/img/generic/rectangle-1.jpg" /> */}
                <div className="card-section">
                    <p>This card makes use of the card-divider element.</p>
                </div>
            </article>
            <article className="card large-4 medium-6 small-12">
                <div className="card-divider">
                    <h4>I'm featured</h4>
                </div>
                {/* <img src="assets/img/generic/rectangle-1.jpg" /> */}
                <div className="card-section">
                    <p>This card makes use of the card-divider element.</p>
                </div>
            </article>
            <article className="card large-4 medium-6 small-12">
                <div className="card-divider">
                    <h4>I'm featured</h4>
                </div>
                {/* <img src="assets/img/generic/rectangle-1.jpg" /> */}
                <div className="card-section">
                    <p>This card makes use of the card-divider element.</p>
                </div>
            </article>
            </section>
        </section>
    );
}

export default Work;