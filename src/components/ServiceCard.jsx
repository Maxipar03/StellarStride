import React from "react";
import '../App.css'

const ServiceCard = ({ iconClass, title, description }) => {
    return (
        <div className="serviceCard">
            <div className="iconServiceContainer">
                <i className={iconClass}></i>
            </div>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <button className="button service">View More</button>
        </div>
    );
};

export default ServiceCard;