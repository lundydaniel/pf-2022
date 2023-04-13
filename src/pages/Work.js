import { React, useEffect, useRef } from "react";
import Slider from "react-slick";
import { projects, rmgArt, sanctus } from "../components/projects";
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import '../style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Work = () => {

    // Scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);

    //! Page animations
    /** Collabrative Project animations */

    const scopeRef = useRef(null);
    
    useEffect(() => {
        // defining match media variable.
        const mm = gsap.matchMedia(scopeRef);
        // defining element for the current one that needs to be animated with ScrollTrigger
        const el = scopeRef.current;
        // setting my match media
        mm.add("(min-width: 844px)", (context) => {
            gsap.to(el.querySelector('.rmg-top-img'),{
                delay: 2,
                duration: 2,
                ease: "back.out",
                x: -50,
                scrollTrigger: {
                    trigger: el.querySelector('.rmg-top-img'),
                    start: "top center",
                    end: "bottom top"
                },
            });
            gsap.to(el.querySelector('.rmg-btm-img'), {
                duration: 2,
                ease: "back.out",
                x: 50,
                scrollTrigger: {
                    trigger: el.querySelector('.rmg-btm-img'),
                    start: "top center",
                    end: "bottom top"
                },
            });
            gsap.to(el.querySelector('.sanc-top-img'), {
                duration: 2,
                ease: "back.out",
                x: -50,
                scrollTrigger: {
                    trigger: el.querySelector('.sanc-top-img'),
                    start: "top center",
                    end: "bottom top"
                },
            });
            gsap.to(el.querySelector('.sanc-btm-img'), {
                duration: 2,
                ease: "back.out",
                x: 50,
                scrollTrigger: {
                    trigger: el.querySelector('.sanc-btm-img'),
                    start: "top center",
                    end: "bottom top"
                },
            });
        });        
    }, []);


    //! settings for the slider
    const settings = {
        easing: 'linear',
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        focusOnSelect: true,
        mobileFirst: true,
        responsive: [
            {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
                {
                    breakpoint: 600,
                    settings: {
                    fade: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
                {
                    breakpoint: 480,
                    settings: {
                    fade: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            ],
        };
    return (
        <div className="proj-card-wrapper" ref={scopeRef}>
            <div className="grid-container">
                <div className="grid-x margin-x">
                    <div className="large-3 medium-12 small-12 collab-header-container">
                    <h1 className="collab-proj-header">Collabrative Projects</h1>
                    </div>
                    <div className="large-9 medium-12 small-12 collab-content-container align-center">
                        {rmgArt && rmgArt.map((item) => (
                            // looping through data
                            <div className="collab-proj" key={item.id}>
                                <h2>{item.title}</h2>
                                <img className="collab-img-1 rmg-top-img" src={item.img} alt={item.alt} />
                                <p className="text-center">{item.description}</p>
                                <img className="collab-img-2 rmg-btm-img" src={item.img2} alt={item.alt2} />
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="button collab-button">View Project</a>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
            </div>
            <div className="grid-container">
                <div className="grid-x margin-x">
                    <div className="large-3 medium-12 small-12">
                    </div>
                    <div className="large-9 medium-12 small-12 collab-content-container align-center">
                        {sanctus && sanctus.map((item) => (
                            // looping through data
                            <div className="collab-proj" key={item.id}>
                                <h2>{item.title}</h2>
                                <img className="collab-img-1 sanc-top-img" src={item.img} alt={item.alt} />
                                <p className="text-center">{item.description}</p>
                                <img className="collab-img-2 sanc-btm-img" src={item.img2} alt={item.alt2} />
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="button collab-button">View Project</a>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
            </div>
            <h1 className="per-proj-header">Personal Projects</h1>
            <Slider {...settings}>
            {projects && projects.map((item) => (
                // looping through the card data
                <div className="large-3 proj-card" key={item.id}>
                    <div className="card-top">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="card-main">
                        <img src={item.img} alt={item.alt} />
                        <p>{item.description}</p>
                    </div>
                    <div className="card-btm">
                        <a href={item.link} target="_blank" rel="noopener noreferrer"className="button proj-button">View Project</a>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
        
    );
}

export default Work;