import React from "react";
import stellarLogo from "../assets/Sin título.svg"
import headsetImg from "../assets/process/headset_16850079.svg"
import invoiceDollar from "../assets/process/file-invoice-dollar_7928185.svg"
import handService from "../assets/process/holding-hand-gear_16542667.svg"
import agreeService from "../assets/process/introduction-handshake_15912195.svg"

const Process = () => {
    return (
        <>
            <div className="procesCard">
                <div className="ProcessImgContainer">
                <div className="processNumber">01</div>
                    <img src={headsetImg} alt="headset" />
                </div>
                <div className="processItemsContainer">
                    <h2>Request a quote</h2>
                    <ul className="processItems">
                        <li>Contact Our Team</li>
                        <li>Tell Us Your Needs</li>
                        <li>Describes You Company</li>
                    </ul>
                </div>
            </div>
            <div className="procesCard">
                <div className="ProcessImgContainer">
                <div className="processNumber">02</div>
                    <img src={invoiceDollar} alt="dollar Contract"/>
                </div>
                <div className="processItemsContainer">
                    <h2>Meeting</h2>
                    <ul className="processItems">
                        <li>Schedule a Meeting</li>
                        <li>Discuss Your Goals</li>
                        <li>Explore Creative Solutions</li>
                    </ul>
                </div>
            </div>
            <div className="procesCard">
                <div className="ProcessImgContainer">
                <div className="processNumber">03</div>
                    <img src={handService} alt="service Hand"/>
                </div>
                <div className="processItemsContainer">
                    <h2>Tailored Proposal</h2>
                    <ul className="processItems">
                        <li>Review a Customized Plan</li>
                        <li>See transparent Pricing</li>
                        <li>Ask for Adjustment</li>
                    </ul>
                </div>
            </div>
            <div className="procesCard">
                <div className="ProcessImgContainer">
                <div className="processNumber">04</div>
                    <img src={agreeService} alt="close Deal" />
                </div>
                <div className="processItemsContainer">
                    <h2>Execute Service</h2>
                    <ul className="processItems">
                        <li>Aprove Start The Project</li>
                        <li>Track Progress in Real-Time</li>
                        <li>Recibe Quality Delivery</li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Process