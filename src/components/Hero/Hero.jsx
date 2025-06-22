import React, { useState } from 'react';
import './Hero.css';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '../../icon';

import image1 from "../../img/promotion.png"
import image2 from "../../img/promotion2.png"
import image3 from "../../img/promotion3.png"


const slides = [
    { id: 1, src: image1, alt: "Promotion 1" },
    { id: 2, src: image2, alt: "Promotion 2" },
    { id: 3, src: image3, alt: "Promotion 3" }
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    };

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h2 className="hero-title">Gabung dengan Direktori Supplier No.1 di Indonesia!</h2>
                <p className="hero-subtitle">Jangkau lebih luas, tampil lebih profesional! <span className="highlight">GRATIS!</span></p>
                <h3 className="hero-brand">DI INDOTRADING</h3>
                <button className="hero-button">
                    REGISTER NOW! <ArrowRightIcon className="hero-button-icon" />
                </button>
            </div>
            <div className="hero-slider">
                 <img src={slides[currentIndex].src} alt={slides[currentIndex].alt} className="slider-image" />
                 <button onClick={prevSlide} className="slider-arrow left-arrow">
                    <ChevronLeftIcon className="arrow-icon" />
                </button>
                <button onClick={nextSlide} className="slider-arrow right-arrow">
                    <ChevronRightIcon className="arrow-icon" />
                </button>
            </div>
        </section>
    );
}