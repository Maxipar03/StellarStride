import '../../index.css'
import { useState, useEffect, useRef } from "react";
import { plansData } from "../../data/plans";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const PlanCard = ({ plan, index, isExiting }) => {

    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Animacion De Entrada
    useGSAP(() => {
        if(!isExiting){
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, delay: index * 0.1 }
            );
        }
    },[plan, index, isExiting])

    // Animacion De Salida
    useGSAP(() => {
        if (isExiting) {
            gsap.to(cardRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.5,
            });
        }
    }, [isExiting])

    //Animacion De Aparicion
    useGSAP(() => {
            gsap.fromTo(
                cardRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top 90%',
                        end: 'top 50%',
                        toggleActions: 'play none reverse none',
                        scrub: true
                    },
                }
            );
        })
    

    return (
        <div ref={cardRef} className={`cardPlan ${isVisible ? "show" : ""}`}>
            <div className="cardPlanTitle">
                <h2>{plan.title}</h2>
                <h4>{plan.description}</h4>
            </div>
            <ul className="cardPlansItemsContainer">
                {plan.points.map((point, inx) => (
                    <li className={point.highlighted ? "cardPlansItems active" : "cardPlansItems"} key={inx}>
                        {point.text}
                    </li>
                ))}
            </ul>
            <div className="buttonPlanContainer">
                <a href={plan.link} target="_blank" className="button plan">Schedule a meet</a>
                <a href="#contact" className="button plan">Request a quote</a>
            </div>
        </div>
    );
};

export const PlanList = ({ selectedPlanType }) => {
    const [activePlan, setActivePlan] = useState([]);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (activePlan.length > 0) {
            setIsExiting(true);
            
            const exitTimeout = setTimeout(() => {
                setActivePlan(plansData[selectedPlanType]);
                setIsExiting(false);
            }, 500);

            return () => clearTimeout(exitTimeout);
            
        } else {
            setActivePlan(plansData[selectedPlanType]);
        }
    }, [selectedPlanType]);

    return (
        <div className="cardPlansContainer">
            {activePlan.map((plan, index) => (
                <PlanCard key={index} plan={plan} index={index} isExiting={isExiting} />
            ))}
        </div>
    );
};

