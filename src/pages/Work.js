import React from "react";
import Slider from "react-slick";
import { projects } from '../components/projects';

import '../style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Work() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };

    return (
        <section className="main-work-container">
                <Slider {...settings}>
                    <article className="work-section">
                            {
                            // looping through Project Object to display data
                            projects && projects.map(( item ) => ( 
                                <article className="work-card" key={ item.id }>
                                <div className="card-divider-top">
                                    <h4>{ item.title }</h4>
                                </div>
                                <img
                                    src={ item.img }
                                    alt={ item.alt } 
                                />
                                <div className="card-article">
                                    <p>{ item.description }</p>
                                </div>
                                <div className="card-divider-bottom">
                                    <a href={ item.link } className="button" target="_blank" rel="noopener noreferrer">View Project</a>
                                </div>
                                </article>
                            ))}
                    </article>
                </Slider>
        </section>
    )
}

export default Work;