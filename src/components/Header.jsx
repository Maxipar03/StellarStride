import React, { useState, useEffect } from 'react';
import stellarLogo from "../assets/Sin título.svg"

const Header = () => {

    const [activeSection, setActiveSection] = useState('');

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

    return (
        <header>
            <div class="stellarLogo">
                <img src={stellarLogo} />
                <h1>StellarStride</h1>
            </div>
            <div class="burgerMenu">
                <i class="fa-solid fa-bars"></i>
            </div>
            <nav>
                <ul>
                    <a href="#home"><li  className= {activeSection === 'home' ? 'active' : ''}>Home</li></a>
                    <a href="#services"><li  className= {activeSection === 'services' ? 'active' : ''}>Services</li></a>
                    <a href="#plans"><li  className={activeSection === 'plans' ? 'active' : ''}>Plans</li></a>
                    <a href="#contact"><li  className={activeSection === 'contact' ? 'active' : ''}>Contact us</li></a>
                </ul>
            </nav>
        </header>
    )
}


export default Header;