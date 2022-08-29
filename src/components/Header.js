import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

// font awesome
// import { faTwitter, faCoffee } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    // storing a reference to the logo
    const logo = useRef();

    useLayoutEffect(() => {
        gsap.to(logo.current,{ rotation: "360" });
    });

    return (
        <nav className="grid-container full">
        <section className="grid-x header-nav">
            
            <article className="cell large-1 medium-1 small-1">
            </article>

            <article className="cell large-1 medium-1 small-1" ref={logo}>
                <Link to="/">
                    <img
                        className="dl-dev-logo"
                        src={require("../images/dl-dev-logo-blue.png")}
                        alt="Daniel Lundy Development Logo"
                    />
                </Link>
            </article>

            <article className="cell large-8 medium-6 small-6">
            </article>

            <article className="cell large-2 medium-2 small-2 align-self-bottom">
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
    );
};

export default Header;
