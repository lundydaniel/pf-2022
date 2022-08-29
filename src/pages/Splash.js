import React from "react";

import { ReactComponent as SplashLogo } from "../images/dl-dev-logo-blue.svg";

function Splash() {
    return (
        <section className="grid-x grid-padding-x">
            <article className="cell large-4 medium-4 small-4"></article>
            <article className="cell large-4 medium-4 small-4"><SplashLogo /></article>
            <article className="cell large-4 medium-4 small-4"></article>
        </section>
    );
}

export default Splash;