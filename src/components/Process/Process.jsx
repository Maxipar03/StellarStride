import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProcessCard } from "../ProcessCard/ProceessCard";

export const Process = () => {


    useGSAP(() => {
        const cards = document.querySelectorAll(".process-card");

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0.5, scale: 0.9 },
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
    });
    return (
        <section id='process' className="homeProcess">
            <h1 className="titleSection">Process</h1>
            <div className="processContent">
                <ProcessCard
                    className="process-card"
                    number="01"
                    title="Request a quote"
                    description="Fill out a short form with information about your business and the services you need. Our team will analyze your requirements and send you an initial quote." />
                <ProcessCard
                    className="process-card"
                    number="02"
                    title="Meeting"
                    description="Schedule a meeting with our team to discuss your project in detail. This session allows us to understand your goals and address any questions you may have." />
                <ProcessCard
                    className="process-card"
                    number="03"
                    title="Meeting"
                    description="After the meeting, we develop a proposal tailored to your business needs, detailing the plan and the solutions we offer." />
                <ProcessCard
                    className="process-card"
                    number="04"
                    title="Execute Service"
                    description="Once the proposal is approved, we start working on your project. Our team ensures timely delivery and exceptional results." />
            </div>
        </section>
    )

}

