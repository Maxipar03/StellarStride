import React, { useState, useEffect } from 'react';
import '../../index.css'
import { HeaderOffer } from '../HeaderOffer/HeaderOffer';
import stellarLogo from "../../assets/Sin título.svg"

export const Header = () => {

    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + 300; 

            sections.forEach(section => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPos >= top && scrollPos < bottom) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <HeaderOffer/>
        <header>
            <div className="stellarLogo">
                <img src={stellarLogo} alt='StellarLogo'/>
                <h1>STELLARSTRIDE</h1>
            </div>
            <div className="burgerMenu" onClick={toggleMenu}>
                {isMenuOpen ? <i class="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </div>
            <nav className={isMenuOpen ? 'open' : ''}>
                <ul>
                    <a href="#home"><li  className= {activeSection === 'home' ? 'active' : ''}>Home</li></a>
                    <a href="#services"><li  className= {activeSection === 'services' ? 'active' : ''}>Services</li></a>
                    <a href="#aboutUs"><li  className= {activeSection === 'aboutUs' ? 'active' : ''}>FAQ</li></a>
                    <a href="#process"><li  className= {activeSection === 'process' ? 'active' : ''}>Process</li></a>
                    <a href="#plans"><li  className={activeSection === 'plans' ? 'active' : ''}>Plans</li></a>
                    <a href="#contact"><li  className={activeSection === 'contact' ? 'active' : ''}>Contact us</li></a>
                </ul>
            </nav>
        </header>
        </>
    )
}

