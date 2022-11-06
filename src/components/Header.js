import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

// font awesome
// import { faTwitter, faCoffee } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    // storing a reference to the logo
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
        <header>
            <nav className="grid-container full">
            <section className="grid-x header-nav">
                
                <article className="columns large-1 medium-1 small-1">
                </article>

                <article className="columns large-1 medium-1 small-1" ref={logo}>
                    <Link to="/about">
                        <img
                            className="dl-dev-logo"
                            src={require("../images/dl-dev-logo-blue.png")}
                            alt="Daniel Lundy Development Logo"
                        />
                    </Link>
                </article>

                <article className="columns large-8 medium-6 small-6">
                </article>

                <article className="columns large-2 medium-2 small-2 align-self-bottom">
                    <ul className="menu align-right">
                        <li> 
                            <Link to="/about">
                                <button type="button" className="submit button">About</button>
                            </Link>
                        </li>
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
    );
};

export default Header;
