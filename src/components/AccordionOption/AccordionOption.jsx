import "../../index.css"
import React, { useState, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const AccordionOption = ({ section, index }) => {

    const [activeIndex, setActiveIndex] = useState(null);
    const sectionsRef = useRef([]);

    
    const toggleSection = (index) => {
        if (activeIndex === index) {
            animateSection(index, false);
            setActiveIndex(null);
        } else {
            
            setActiveIndex(index);
            animateSection(index, true);
        }
    };


    useGSAP(
        () => {
            gsap.registerPlugin(useGSAP);
            gsap.registerPlugin(ScrollTrigger);

            const cards = gsap.utils.toArray('.accordionOption');

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            end: 'top 50%',
                            toggleActions: 'play none reverse none',
                            scrub: true
                        },
                    }
                );
            });
        }
    );



    const animateSection = (index, expand) => {

        const target = sectionsRef.current[index];

        if (expand) {
            gsap.to(target, { height: "auto", duration: 0.5, ease: "power2.out" });
        } else {
            gsap.to(target, { height: 0, duration: 0.5, ease: "power2.in" });
        }
    };


    return (
        <div>
            <div key={index} className="accordionOption">
                <div className="AboutUsTitleBox" onClick={() => toggleSection(index)}>
                <h4
                    className="aboutUsTitle"
                    
                >
                    {section.title}
                </h4>
                <i
                        className={`fa-solid fa-angle-down ${
                            activeIndex === index ? "rotated" : ""
                        }`}
                    ></i>
                </div>
                <div
                    ref={(el) => (sectionsRef.current[index] = el)}
                    className="accordionContent"
                >
                    <p>{section.content}</p>
                </div>
            </div>
        </div>
    );
};
