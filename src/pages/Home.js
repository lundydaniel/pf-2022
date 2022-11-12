import React from "react";
import { ReactComponent as WorkIcon } from "../images/project-work-icon.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap/all";

import '../style.css';


function Home() {
    //grabbing the elements that I want to animate.
    const authorImg = useRef();
    const aboutSection = useRef();
    const mainContainer = useRef();

    // gsap.registerPlugin(CustomEase, CustomWiggle); // register custom ease for CTA
    // CustomWiggle.create("myWiggle", {wiggles: 6});
    // const WorkIcon = useRef();

    useEffect(() => {
        //setting up gsap timeline for the page load animation
        let tl = gsap.timeline({});
        tl.fromTo(mainContainer.current, {
            autoAlpha: 0
        },
        {
            autoAlpha: 1,
            duration: 0.5
        })
        tl.fromTo(authorImg.current, {
            x: -300,
            autoAlpha: 0
        },
        {
            x: 0,
            duration: 1,
            autoAlpha: 1,
            ease: "back.out"
        })
        tl.fromTo(aboutSection.current, {
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

    // useEffect(() => {
    //     gsap.to(WorkIcon.current, {
    //         repeat: -1, 
    //         duration: 0.5,
            
    //     })
    // })
    return (
        <section className="grid-container main-container" ref={mainContainer}>
            <section className="grid-x grid-margin-x align-center">
                <article className="cell large-5 medium-5 small-5 author-img-container" ref={authorImg}>
                    <img className="author-img" src={require("../images/dan2.jpg")} alt="Website author" />
                </article>
                <article className="cell large-5 medium-5 small-5 align-self-middle about-section-text" ref={aboutSection}>
                    <h1 className="about-header">Hello!</h1>
                        <p>
                            My name is Daniel. I am a web developer with a passion to help
                            people. I find joy in helping others accomplish their online needs and goals. 
                            In my free time I love to play around with SVG animation and learning new ways to program. 
                            <br />
                            Outside of the computer world I enjoy basketball, fishing, wood working, photography, video games and
                            spending time with my wife and kids. Feel free to contact me if you have any questions or
                            inquiries.
                            <br />
                            Feel free to check out some of my recent projects. <WorkIcon className="work-icon" />
                        </p>
                </article>
            </section>
        </section>
    );
}

export default Home;