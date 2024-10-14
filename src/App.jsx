import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import earthBanner from "./assets/ai-generated-earth-network-on-transparent-background-free-png-1.webp"
import stellarLogo from "./assets/Sin título.svg"
import ServiceCard from './components/ServiceCard'
import fbsLogo from "./assets/reference/Group-17-FBS-1.svg"
import pardoLogo from "./assets/reference/Logo.svg"
import pureWheelLogo from "./assets/reference/trace.svg"
import astroContact from "./assets/astro.webp"
import PlanList from './components/PlanCard'
import Process from './components/Proces'
import "./index.css"
import Contact from './components/Contact'

function App() {

  const [selectedPlan, setSelectedPlan] = useState("webDevelopment");

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan)
  }

  return (
    <>
    <Header/>
      <main>
        <section id='home' className="homeBanner">
          <div className="heroSectionContainer">
            <div className="descriptionBanner">
              <h1>Elevete with <strong className="bannerDescriptionStrong">Growth Solution</strong></h1>
              <h2>Transform your business for the modern world with tailored web development and marketing
                solutions. Improve processes, increase visibility, and attract more customers. Take the next
                step—let our Growth Partner service elevate your brand!</h2>
              <a href="#plans" className="button banner">Start Now <i id='btnIcon' className="fa-solid fa-angles-right"></i></a>
            </div>
            <div className="bannerImageContainer">
              <img src={earthBanner} alt="Earth" />
            </div>
          </div>
          <div className="bannerReferenceContainer">
            <h1 className="bannerReferenceText">Our clients</h1>
            <div className="bannerReference">
              <div className="bannerBrand">
                <img src={pardoLogo} alt="pardoLogo" />
                <h1>PARDOHNOS</h1>
              </div>
              <div className="bannerBrand">
                <img src={fbsLogo} alt='FBSLogo' />
                <h1>FB&S</h1>
              </div>
              <div className="bannerBrand">
                <img src={pureWheelLogo} alt="PureWheelLogo" />
                <h1>PureWheel</h1>
              </div>
            </div>
          </div>
        </section>
        <h1 className="titleSection">Services</h1>
        <section id='services' className="homeService">
          <ServiceCard
            iconClass="fa-solid fa-code"
            title="Web Development"
            description="In today’s digital world, a well-developed website is crucial for business growth. It ensures
                credibility, improves user experience, and boosts accessibility, enabling you to reach a wider
                audience and convert visitors into loyal customers."
          />
          <ServiceCard
            iconClass="fa-solid fa-bullhorn"
            title="Marketing Digital"
            description="Effective marketing drives growth by increasing brand visibility and engagement. It connects
                businesses with their target audience, builds trust, and generates leads. In today’s competitive
                market, strategic marketing is key to staying ahead."
          />
          <ServiceCard
            iconClass="fa-solid fa-ranking-star"
            title="Growth Partner"
            description="Our Growth Partner service merges web development and marketing to ensure your business thrives
                online. A powerful website attracts visitors, while strategic marketing drives engagement, turning
                traffic into loyal customers."
          />
        </section>
        <h1 className="titleSection">Process</h1>
        <section id='process' className="homeProcess">
        <Process/>
        </section>
        <h1 className="titleSection">Plans</h1>
        <section id='plans' className="homePlans">
          <div className="optionPlansContainer">
            <div onClick={() => handlePlanSelection('webDevelopment')}   className={`optionPlans ${selectedPlan === 'webDevelopment' ? 'selected' : ''}`}>
              <h2>Web development</h2>
            </div>
            <div onClick={() => handlePlanSelection('marketing')}   className={`optionPlans ${selectedPlan === 'marketing' ? 'selected' : ''}`}>
              <h2>Marketing</h2>
            </div>
            <div onClick={() => handlePlanSelection('growthPartner')}   className={`optionPlans ${selectedPlan === 'growthPartner' ? 'selected' : ''}`} >
              <h2>Growth Partner</h2>
            </div>
          </div>
          <PlanList selectedPlanType={selectedPlan}/>
        </section>
        <h1 className="titleSection">Contact Us</h1>
        <section id='contact' className="homeContact">
        <Contact/>
        </section>
        <Footer />
      </main>
      <script src="./main.js"></script>
    </>
  )
}

export default App
