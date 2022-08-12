import { Link } from "react-router-dom";

// font awesome
// import { faTwitter, faCoffee } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <nav className="grid-container full">
        <section className="grid-x grid-margin-x header-nav">
            
            <article className="cell large-1 medium-1 small-1">
            </article>

            <article className="cell large-1 medium-1 small-1">
                <Link to="/">
                    <img
                        className="dl-dev-logo"
                        src={require("../images/dl-dev-logo-lrg.png")}
                        alt="Daniel Lundy Development Logo"
                    />
                </Link>
            </article>

            <article className="cell large-6 medium-6 small-6">
            </article>

            <article className="cell large-2 medium-2 small-2">
                <Link to="/about">
                    <button type="button" className="submit button">About</button>
                </Link>
            </article>

            <article className="cell large-2 medium-2 small-2 ">
                <Link to="/work">
                <button type="button" className="submit button">Work</button>
                </Link>
            </article>
        </section>
        </nav>
    );
};

export default Header;
