import { useState } from 'react'
import Header from './components/Header'
import earthBanner from "./assets/ai-generated-earth-network-on-transparent-background-free-png-1.webp"
import stellarLogo from "./assets/Sin título.svg"
import ServiceCard from './components/ServiceCard'
import fbsLogo from "./assets/reference/Group-17-FBS-1.svg"
import pardoLogo from "./assets/reference/Logo.svg"
import pureWheelLogo from "./assets/reference/trace.svg"
import astroContact from "./assets/astro.webp"
import PlanList from './components/PlanCard'
import './App.css'

function App() {

  const [selectedPlan, setSelectedPlan] = useState("webDevelopment");

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan)
  }

  return (
    <>
    <Header/>
      <main>
        <section id='home' class="homeBanner">
          <div class="heroSectionContainer">
            <div class="descriptionBanner">
              <h1>Elevete with <strong class="bannerDescriptionStrong">Growth Solution</strong></h1>
              <h2>Transform your business for the modern world with tailored web development and marketing
                solutions. Improve processes, increase visibility, and attract more customers. Take the next
                step—let our Growth Partner service elevate your brand!</h2>
              <button class="button banner">Start Now <i class="fa-solid fa-angles-right"></i></button>
            </div>
            <div class="bannerImageContainer">
              <img src={earthBanner} alt="" />
            </div>
          </div>
          <div class="bannerReferenceContainer">
            <h1 class="bannerReferenceText">Our clients</h1>
            <div class="bannerReference">
              <div class="bannerBrand">
                <img src={pardoLogo} alt="" />
                <h1>PARDOHNOS</h1>
              </div>
              <div class="bannerBrand">
                <img src={fbsLogo} />
                <h1>FB&S</h1>
              </div>
              <div class="bannerBrand">
                <img src={pureWheelLogo} alt="" />
                <h1>PureWheel</h1>
              </div>
            </div>
          </div>
        </section>
        <h1 class="titleSection">Services</h1>
        <section id='services' class="homeService">
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
        <h1 class="titleSection">Plans</h1>
        <section id='plans' class="homePlans">
          <div class="optionPlansContainer">
            <div onClick={() => handlePlanSelection('webDevelopment')} class="optionPlans selected">
              <h2>Web development</h2>
            </div>
            <div onClick={() => handlePlanSelection('marketing')} class="optionPlans">
              <h2>Marketing</h2>
            </div>
            <div onClick={() => handlePlanSelection('growthPartner')} class="optionPlans" >
              <h2>Growth Partner</h2>
            </div>
          </div>
          <PlanList selectedPlanType={selectedPlan}/>
        </section>
        <h1 class="titleSection">Contact Us</h1>
        <section id='contact' class="homeContact">
          <div class="contactImageContainer">
            <img class="contactImage" src={astroContact} alt="" />
          </div>
          <div class="contactContainer">
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Plans" />
            <textarea type="text" placeholder="Description"></textarea>
            <button class="button form">Send Form</button>
          </div>
        </section>
        <footer>
          <div>
            <div class="stellarLogo">
              <img class="footerLogo" src={stellarLogo} />
              <h1>StellarStride</h1>
            </div>
            <h3>From The Earth to the stars we take you far</h3>
          </div>
          <div>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-x-twitter"></i>
          </div>
        </footer>
      </main>
      <script src="./main.js"></script>
    </>
  )
}

export default App
