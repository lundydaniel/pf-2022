// $(document).foundation()

// console.log("connected");

//! Window onload to allow svg to target properly
window.onload = function () {

    //! Grabbing SVG Object

    let splash_Obj = document.getElementById("SVGPanels").contentDocument;
    let splash_Logo = document.getElementById("SVGLogo").contentDocument;
    let r_panel = splash_Obj.getElementById("r-panel");
    let l_panel = splash_Obj.getElementById("l-panel");
    let logo = splash_Logo.getElementById("logo");
    let dev = splash_Logo.getElementById("development");

    // Grabbing the logo container
    let logo_container = document.querySelector(".splash-logo");

    //** Function to move the panels out */
    function panelSlideOut() {
        //** Animating left panel of hero */
        gsap.to(l_panel, {
            duration: 1.3,
            x: -400,
            ease: Power4.inOut
        });

        //** Animating right panel of hero */
        gsap.to(r_panel, {
            duration: 1.3,
            x: 400,
            ease: Power4.inOut
        });
    }

    //** Function to move the panels in */
    function panelSlideIn() {
        //** Animating left panel of hero */
        gsap.to(l_panel, {
            duration: 1.3,
            x: 0,
            ease: Power4.out,
            delay: 1.5
        });

        //** Animating right panel of hero */
        gsap.to(r_panel, {
            duration: 1.3,
            x: 0,
            ease: Power4.out,
            delay: 1.5
        });
    }

    //** Function to animate in the logo container */
    function logoCon() {
        gsap.to(logo_container, {
            delay: 1.4,
            duration: 2.5,
            opacity: 1
        });
    }

    //** Function for the logo animation */
    function logoAni() {
        gsap.to(logo, {
            duration: 1,
            keyframes: {
                scale: [0, 1.1, 1]
            },
            transformOrigin: "center"
        });
        gsap.to(dev, {
            delay: 2.5,
            duration: 2,
            opacity: 1
        });
    }

    //** Function to bring it all together (Main Function) */

    function mainFunc() {
        panelSlideOut();
        logoCon();
        logoAni();
        panelSlideIn();
    }
    mainFunc();
}