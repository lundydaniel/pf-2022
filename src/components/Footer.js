import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook,  } from "@fortawesome/free-brands-svg-icons";

import '../style.css';


function Footer() {
    
    return (

        //*! Add gravatar for email footer - look at security issues if any
        
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
        
    );
}

export default Footer;