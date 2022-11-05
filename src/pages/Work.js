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

    const imgAniTop = useRef();
    const imgAniBottom = useRef();
    
    useEffect(() => {
        gsap.to(imgAniTop.current,{
            duration: 5,
            delay: 0.3,
            ease: "elastic",
            x: -100,
            // scrollTrigger: {
            // trigger: imgAniTop,
            // start: "30px 80%",
            // toggleActions: "restart pause resume pause"
            // }
        });
    });

    useEffect(() => {
        gsap.to(imgAniBottom.current, {
            duration: 5,
            delay: 2,
            ease: "elastic",
            x: 100,
            // scrollTrigger: {
            // trigger: imgAniBottom, 
            // start: "30px 80%",
            // toggleActions: "restart pause resume pause"
            // }
        });
    });


    //! settings for the slider
    const settings = {
        easing: 'linear',
        dots: true,
        infinite: true,
        autoplay: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
                {
                    breakpoint: 480,
                    settings: {
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
                    <div className="large-3 collab-header-container">
                    <h1 className="collab-proj-header">Collabrative Projects</h1>
                    </div>
                    <div className="large-6 collab-content-container">
                        {collabProj && collabProj.map((item) => (
                            // looping through data
                            <div className="rmg-proj" key={item.id}>
                                <h2>{item.title}</h2>
                                <img className="rmg-img-1" src={item.img} alt={item.alt} ref={imgAniTop} />
                                <p>{item.description}</p>
                                <img className="rmg-img-2" src={item.img2} alt={item.alt2} ref={imgAniBottom} id="imgAniBottom" />
                                <a href={item.link} target="_blank" rel="noopener noreferrer"className="button collab-button">View Project</a>
                            </div>
                        ))}
                        <div className="large-3"></div>
                    </div>
                </div>
                <hr />
            </div>
            <h1 className="per-proj-header">Personal Projects</h1>
            <Slider {...settings}>
            {projects && projects.map((item) => (
                // looping through the card data
                <div className="proj-card" key={item.id}>
                    <div className="card-top">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="card-main">
                        <img src={item.img} alt={item.alt} />
                        <p>{item.description}</p>
                    </div>
                    <div className="card-btm">
                        <a href={item.link} target="_blank" rel="noopener noreferrer"className="button">View Project</a>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
        
    );
}

export default Work;