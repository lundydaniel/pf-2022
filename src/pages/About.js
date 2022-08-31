import React from "react";

import '../style.css';

function About() {
    return (
        <section className="grid-container about-container">
            <section className="grid-x grid-margin-x align-center">
                <article className="cell large-5 medium-5 small-5 author-img-container">
                    <img className="author-img" src={require("../images/dan2.jpg")} alt="Website author" />
                </article>
                <article className="cell large-5 medium-5 small-5 align-self-middle about-section">
                    <h1 className="about-header">Hello!</h1>
                        <p>
                            My name is Daniel and thank you for visiting my website. I am a web developer with a passion to help
                            people. I find joy in helping others accomplish their online needs and goals. 
                            In my free time I love to play around with SVG animation and learn new ways to program. 
                            <br />
                            Outside of the computer world I enjoy basketball, fishing, wood working, photography, video games and
                            spending time with my wife and kids. Feel free to contact me if you have any questions or
                            inquiries.
                        </p>
                </article>
            </section>
        </section>
    );
}

export default About;