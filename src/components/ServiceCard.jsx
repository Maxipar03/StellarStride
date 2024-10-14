import React from "react";
import '../index.css'

const ServiceCard = ({ iconClass, title, description }) => {
    return (
        <div className="serviceCard">
            <div className="iconServiceContainer">
                <i className={iconClass}></i>
            </div>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    );
};

export default ServiceCard;