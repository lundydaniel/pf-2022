import React from "react";

import '../style.css';


function Footer() {
    return (

        //*! Add gravatar for email footer - look at security issues if any
        
            <footer className="grid-container full">
                <section className="grid-x padding-x footer">
                    <article className="columns large-4 medium-4 small-4">
                        <p>thing 1</p>
                    </article>
                    <article className="columns large-4 medium-4 small-4">
                        <p>thing 2</p>
                    </article>
                    <article className="columns large-4 medium-4 small-4">
                        <p>thing 3</p>
                    </article>
                </section>
            </footer>
        
    );
}

export default Footer;