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
    );
};

export default Header;
