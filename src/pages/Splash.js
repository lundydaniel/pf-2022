import React from "react";
import { ReactComponent as SplashLogo } from "../images/dl-dev-logo-blue.svg";
import { gsap } from "gsap/all";
import { useEffect, useRef } from "react";

function Splash() {
    // storing a reference for the splash logo.
    const splashLogo = useRef();

    useEffect(() => {
        gsap.to(splashLogo.current, {
            duration: 2,
            ease: "power3.easeInOut",
            x: -577,
            y: -294,
            scale: 0.26,
            opacity : 0
        })
    });

    return (
        <section className="grid-x grid-padding-x" ref={splashLogo}>
            <article className="cell large-4 medium-4 small-4"></article>
            <article className="cell large-4 medium-4 small-4"><SplashLogo /></article>
            <article className="cell large-4 medium-4 small-4"></article>
        </section>
    );
}

export default Splash;