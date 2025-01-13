import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../index.css'

export const ServiceCard = ({ iconClass, title, description }) => {

    const cardRef = useRef();

    useGSAP(
        () => {
            gsap.registerPlugin(useGSAP);
            gsap.registerPlugin(ScrollTrigger);

            const cards = gsap.utils.toArray('.serviceCard');

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

    return (
            <div ref={cardRef} className="serviceCard">
                <h2 className="serviceTitle">{title}</h2>
                <h3 className="serviceText">{description}</h3>
            </div>
    );
};
