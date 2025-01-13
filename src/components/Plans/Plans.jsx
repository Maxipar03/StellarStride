import { useState } from "react";
import { PlanList } from "../PlanCard/PlanCard";


export const Plans = () => {

    const [selectedPlan, setSelectedPlan] = useState("webDevelopment");

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan)
    }


    return (
        <section id='plans' className="homePlans">
            <h1 className="titleSection">Plans</h1>
            <div className="plansContent">
                <div className="optionPlansContainer">
                    <div onClick={() => handlePlanSelection('webDevelopment')} className={`optionPlans ${selectedPlan === 'webDevelopment' ? 'selected' : ''}`}>
                        <h2>Web development</h2>
                    </div>
                    <div onClick={() => handlePlanSelection('marketing')} className={`optionPlans ${selectedPlan === 'marketing' ? 'selected' : ''}`}>
                        <h2>Marketing</h2>
                    </div>
                    <div onClick={() => handlePlanSelection('growthPartner')} className={`optionPlans ${selectedPlan === 'growthPartner' ? 'selected' : ''}`} >
                        <h2>Growth Partner</h2>
                    </div>
                </div>
                <PlanList selectedPlanType={selectedPlan} />
            </div>
        </section>
    )
}
