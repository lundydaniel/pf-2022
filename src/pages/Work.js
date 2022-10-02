import React from "react";
import Slider from "react-slick";
import { projects } from '../components/projects';
import { collabProj } from "../components/projects";

import '../style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Work () {
    const settings = {
        easing: 'linear',
        dots: true,
        infinite: false,
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
                            <div className="test" key={item.id}>
                                <h2>{item.title}</h2>
                                <img className="rmg-img-1" src={item.img} alt={item.alt} />
                                <p>{item.description}</p>
                                <img className="rmg-img-2" src={item.img2} alt={item.alt2} />
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