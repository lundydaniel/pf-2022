import React, { useEffect, useRef} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook,  } from "@fortawesome/free-brands-svg-icons";

import '../style.css';



function RootLayout() {
const logo = useRef();

useEffect(() => {
    gsap.fromTo(logo.current, {
            autoAlpha: 0
        },
        { 
        delay: 1,
        duration: 1,
        ease: "sine.inOut",
        autoAlpha: 1
    });
});
    return (
        <section className='app-start'>
    {
    <header>
        <nav className="grid-container full">
            <section className="grid-x header-nav">

                <article className="cell large-8 medium-8 small-8 logo" ref={logo}>
                    <Link to="/home">
                        <img
                            className="dl-dev-logo"
                            src={require("../images/dl-dev-logo-blue.png")}
                            alt="Daniel Lundy Development Logo"
                        />
                    </Link>
                </article>

                <article className="cell large-4 medium-4 small-4 align-self-bottom">
                    <ul className="menu align-right">
                        <li>
                            <Link to="/work">
                                <button type="button" className="submit button">Work</button>
                            </Link>
                        </li>
                    </ul>
                </article>
            </section>
        </nav>
    </header> 
    }

    <main>
        <Outlet />
    </main>
    <footer>
        
    <footer className="grid-container full">
                <section className="grid-x padding-x align-center footer">
                    <article className="cell large-3 medium-3 small-12">
                    <ul className="menu simple social-media">
                            <li>
                                <a href="https://www.facebook.com/dan.lundy.31" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/0nthedl21/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/0nthedl_" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className="cell large-3 medium-3 small-12 copywrite">
                        <p>&copy; Daniel Lundy Development 2022</p>
                    </article>
                    <article className="cell large-3 medium-3 small-12 email-link">
                        <ul className="menu simple email-link">
                            <li>Feel free to reach out here.</li>
                            <li>
                                <a href="mailto:admin@daniellundydev.ca">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </li>
                        </ul>
                    </article>
                </section>
            </footer>
    </footer>
    </section>
    )
}

export default RootLayout;



