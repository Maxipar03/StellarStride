import "../../index.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const ProcessCard = ({ img, title, description, number }) => {


    useGSAP(
        () => {
            gsap.registerPlugin(useGSAP);
            gsap.registerPlugin(ScrollTrigger);

            const cards = gsap.utils.toArray('.procesCard');

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0.2, scale: 0.9},
                    {
                        opacity: 1,
                        scale: 1,
                        scrollTrigger: {
                            trigger: card,      
                            start: "top center",
                            end: "center center",
                            scrub: true,
                            onEnter: () => card.classList.add("active"),
                            onLeaveBack: () => card.classList.remove("active"),
                            onEnterBack: () => card.classList.add("active"),
                            onLeave: () => card.classList.remove("active"),
                        },
                    }
                );
            });
        }
    );

    return (
        <div className="procesCard">
            <div className="ProcessImgContainer">
                <div className="processNumber">{number}</div>
            </div>
            <div className="processItemsContainer">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

