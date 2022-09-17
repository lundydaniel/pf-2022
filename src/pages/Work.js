import React from "react";
import Slider from "react-slick";
import { projects } from '../components/projects';

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
            <Slider {...settings}>
            {projects.map((item) => (
                // looping through the card data
                <div className="proj-card" key={item.id}>
                    <div className="card-top">
                        <h1>{item.title}</h1>
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