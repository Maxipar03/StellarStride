import React from "react";
import { useState, useEffect } from "react";
import { plansData } from "../data/plans";

const PlanCard = ({ plan, index, isExiting }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [isExited, setIsExited] = useState(false);

    useEffect(() => {
        if (isExiting) {
            const exitTimeout = setTimeout(() => {
                setIsExited(true); 
                setIsVisible(false);
            }, index * 100);

            return () => clearTimeout(exitTimeout);
        } else {
            setIsExited(false);
        }
    }, [isExiting, index]);

    useEffect(() => {
        if (!isExiting) {
            setIsVisible(false);
            const enterTimeout = setTimeout(() => {
                setIsVisible(true);
            }, index * 100);

            return () => clearTimeout(enterTimeout);
        }
    }, [plan, index, isExiting]);


    return (
        <div className={`cardPlan ${isVisible ? "show" : ""} ${isExited ? "exit" : ""}`}>
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
                <button className="button plan">Schedule a meet</button>
                <button className="button plan">Request a quote</button>
            </div>
        </div>
    );
};

const PlanList = ({ selectedPlanType }) => {
    const [activePlan, setActivePlan] = useState([]);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (activePlan.length > 0) {
            setIsExiting(true);
            const exitTimeout = setTimeout(() => {
                setActivePlan(plansData[selectedPlanType]);
                setIsExiting(false);
            }, 1000);

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

export default PlanList;