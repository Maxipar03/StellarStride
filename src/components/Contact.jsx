import React from "react";
import './App.css'
import astroContact from "../assets/astro.webp"


const Contact = () => {
    return (
        <>
            <div className="contactImageContainer">
                <img className="contactImage" src={astroContact} alt="" />
            </div>
            <div className="contactContainer">
                <input type="text" placeholder="Company" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Plans" />
                <textarea type="text" placeholder="Description"></textarea>
                <button className="button form">Send Form</button>
            </div>
        </>
    )
}

export default Contact