import React from "react";

import '../style.css';

function About() {
    return (
        <section className="grid-container about-container">
            <h1>About page</h1>
            <section className="grid-x grid-margin-x align-center">
                <article className="cell large-5 medium-5 small-5 gray">left</article>
                <article className="cell large-5 medium-5 small-5 gray">right</article>
            </section>
        </section>
    );
}

export default About;