import React from "react";
import "../../index.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoBanner from "../../assets/119193-717336704_small.mp4"


export const Banner = () => {

    return (
        <section id='home' className="homeBanner">
            <div className="overlay"></div>
            <video src={videoBanner} autoPlay loop muted />
            <div className="heroSectionContainer">
                <h1>Start your transformation today with <strong className="strongBanner">DIGITALS SOLUTIONS</strong></h1>
                <div className="servicesBanner">
                <p>Web Development, Marketing & Growth Partner</p>
                </div>
            </div>
        </section>
    );
};




