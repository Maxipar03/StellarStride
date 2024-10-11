import React from "react";
import './App.css'
import stellarLogo from "../assets/Sin título.svg"

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="stellarLogoFooter">
                    <img className="footerLogo" src={stellarLogo} />
                    <h1>StellarStride</h1>
                </div>
                <h3>From The Earth to the stars we take you far</h3>
            </div>
            <div className='socialFooter'>
                <a href="https://www.instagram.com/stellarstride.it/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/stellarstride" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
        </footer>
    );
};

export default Footer;