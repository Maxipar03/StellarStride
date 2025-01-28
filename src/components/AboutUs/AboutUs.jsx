import { AccordionOption } from "../AccordionOption/AccordionOption";
import svgCard from "../../assets/1873960.svg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const AboutUs = () => {

    useGSAP(
        () => {
            gsap.registerPlugin(useGSAP);
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(
                ".aboutUsSvg",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: ".aboutUsSvg",
                        start: 'top 90%',
                        end: 'top 5%',
                        toggleActions: 'play none reverse none',
                        scrub: true
                    },
                }
            );

        }
    );

    const sections = [
        { title: "What plans does your agency offer?", content: "We offer web development, digital marketing, and our unique Growth Partner plan. This plan combines both web development and marketing strategies to help your brand achieve its full potential online." },
        { title: "How long does it take to complete a project?", content: "The timeline depends on the scope of the project. On average, web development projects take 4-6 weeks, while marketing strategies are ongoing and adjusted monthly based on performance." },
        { title: "What is the Growth Partner plan?", content: "The Growth Partner plan integrates web development and digital marketing into a cohesive strategy tailored to your business. This service focuses on scaling your brand, improving online visibility, and driving measurable results." },
        { title: "Do you offer custom web design?", content: "Absolutely! We create fully customized websites tailored to your business goals, ensuring a unique and professional online presence that aligns with your brand identity." },
        { title: "How can I get started with your services?", content: "Getting started is easy! Simply fill out the contact form on our website, and our team will reach out to schedule a consultation to discuss your needs and goals." },
    ];

    return (
        <section id='aboutUs' className='homeAboutUs'>
            <h1 className="titleSection">FAQ</h1>
            <div className="aboutUsContent">
                <div className="accordionContainer">
                    {sections.map((section, index) => (
                        <AccordionOption key={index} section={section} index={index} />
                    ))}
                </div>
                <div className="aboutUsContentImg">
                    <img className="aboutUsSvg" src={svgCard} alt="" />
                </div>
            </div>
        </section>
    );
};

