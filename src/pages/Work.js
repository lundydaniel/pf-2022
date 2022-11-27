import { React, useEffect, useRef } from "react";
import Slider from "react-slick";
import { projects } from '../components/projects';
import { collabProj } from "../components/projects";
import { gsap, ScrollTrigger } from "gsap/all";


import '../style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Work = () => {

    // Scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);

    //! Page animations
    /** Collabrative Project animations */

    const scopeRef = useRef();
    
    useEffect(() => {
        // defining match media variable.
        let mm = gsap.matchMedia(scopeRef);
        // setting my match media
        mm.add("(min-width: 844px)", (context) => {
            gsap.to('.topImg',{
                duration: 5,
                delay: 0.3,
                ease: "elastic",
                x: -100
            });
            gsap.to('.buttomImg', {
                duration: 5,
                delay: 2,
                ease: "elastic",
                x: 100
            });
        });        
    });


    //! settings for the slider
    const settings = {
        easing: 'linear',
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
                {
                    breakpoint: 480,
                    settings: {
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            ],
        };
    return (
        <div className="proj-card-wrapper">
            <div className="grid-container">
                <div className="grid-x margin-x">
                    <div className="large-3 medium-12 small-12 collab-header-container">
                    <h1 className="collab-proj-header">Collabrative Projects</h1>
                    </div>
                    <div className="large-9 medium-12 small-12 collab-content-container" ref={scopeRef}>
                        {collabProj && collabProj.map((item) => (
                            // looping through data
                            <div className="rmg-proj" key={item.id}>
                                <h2>{item.title}</h2>
                                <img className="rmg-img-1 topImg" src={item.img} alt={item.alt} />
                                <p>{item.description}</p>
                                <img className="rmg-img-2 buttomImg" src={item.img2} alt={item.alt2} />
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