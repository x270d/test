import React from "react";
import Slider from "react-slick";
import day from '../resources/img/day.jpg'
import cold from '../resources/img/cold.jpg'
import warm from '../resources/img/warm.jpg'

const slides = [
    { id: 1, color: 'Теплый', image: warm },
    { id: 2, color: 'Теплый', image: warm },
    { id: 3, color: 'Теплый', image: warm },
    { id: 4, color: 'Дневной', image: day },
    { id: 5, color: 'Дневной', image: day },
    { id: 6, color: 'Дневной', image: day },
    { id: 7, color: 'Холодный', image: cold },
    { id: 8, color: 'Холодный', image: cold },
    { id: 8, color: 'Холодный', image: cold },
]



function SimpleSlider({ filters }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <Slider {...settings} className="slider" >
            {slides.filter(i => ~filters.indexOf(i.color)).map(j => (
                <div className="slide-item" key={j.id}>
                    <img src={j.image} alt="" />
                </div>
            ))}
        </Slider>
    );
}

export default SimpleSlider;
