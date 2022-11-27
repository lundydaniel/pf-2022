import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, CustomEase } from "gsap/all";

import '../style.css';


function Home() {

    //! Page animations
    //grabbing the elements that I want to animate.
    const authorImg = useRef();
    const aboutSection = useRef();
    const mainContainer = useRef();

    //Creating a custom ease for the CTA in the about section
    gsap.registerPlugin(CustomEase);
    const workIcon = useRef();
    CustomEase.create("workIconEase", "M0,0.005 C0,0.005 0.056,0.445 0.175,0.445 0.294,0.445 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0");

    useEffect(() => {
        //setting up gsap timeline for the page load animation
        let aboutTl = gsap.timeline({});
        aboutTl.fromTo(mainContainer.current, {
            autoAlpha: 0
        },
        {
            autoAlpha: 1,
            duration: 0.5
        })
        aboutTl.fromTo(authorImg.current, {
            x: -300,
            autoAlpha: 0
        },
        {
            x: 0,
            duration: 1,
            autoAlpha: 1,
            ease: "back.out"
        })
        aboutTl.fromTo(aboutSection.current, {
            y: 500,
            autoAlpha: 0
        },
        {
            y: 0,
            duration: 1,
            autoAlpha: 1,
            delay: 0.2,
            ease: "back.out"
        })
    })

    // CTA Button in about section text, animation.
    useEffect(() => {
        let workIconTl = gsap.timeline({repeat: -1});
        workIconTl.fromTo(workIcon.current,  {
            x: 0,
            ease: "workIconEase",
            duration: 1.5
        },
        {
            x: -2,
            ease: "workIconEase",
            duration: 1.5
        })
    })
    return (
        <section className="grid-container main-container" ref={mainContainer}>
            <section className="grid-x grid-margin-x align-center">
                <article className="cell large-5 medium-12 small-12 author-img-container" ref={authorImg}>
                    <img className="author-img" src={require("../images/dan2.jpg")} alt="Website author" />
                </article>
                <article className="cell large-5 medium-12 small-12 align-self-middle about-section-text" ref={aboutSection}>
                    <h1 className="about-header">Hello!</h1>
                        <p>
                            My name is Daniel. I am a web developer with a passion to help
                            people. I find joy in helping others accomplish their online needs and goals. 
                            In my free time I love to play around with SVG animation and learning new ways to program. 
                            <br />
                            Outside of the computer world I enjoy basketball, fishing, wood working, photography, video games and
                            spending time with my wife and kids. Feel free to contact me if you have any questions or
                            inquiries.
                        </p>
                        <section className="grid-x grid-margin-x work-cta">
                            <article className="cell small-8">Feel free to check out some of my recent projects.</article>
                            <article className="cell small-4">
                                <Link to="/work">
                                    <img className="work-icon" src={require("../images/project-work-icon.png")} alt="Icon for recent projects." ref={workIcon} />
                                </Link>
                            </article>
                        </section>
                </article>
            </section>
        </section>
    );
}

export default Home;