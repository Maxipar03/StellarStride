import "../../index.css"
import { ServiceCard } from "../ServicesCard/ServiceCard";



export const ServicesSection = () => {
  return (
    <section id='services' className="homeService">
          <h1 className="titleSection">Services</h1>
    <div className="sectionContent">
      <ServiceCard
        title="Development"
        description="Provide tailored web development solutions, from corporate websites to interactive applications, ensuring optimal performance and scalability."
      />
      <ServiceCard
        title="UX/UI"
        description="Design intuitive and visually appealing digital experiences that prioritize usability and enhance the interaction between users and your product or service."
      />
      <ServiceCard
        title="Branding"
        description="Build and strengthen your brand identity by creating a consistent and memorable presence across all touchpoints—from logos and color palettes to brand voice and values"
      />
      <ServiceCard
        title="Social Media Managment"
        description="Manage your social media channels with personalized strategies that increase engagement and build an active community around your brand."
      />
      <ServiceCard
        title="SEO"
        description="Optimize your website's presence on search engines to improve visibility and attract high-quality organic traffic."
      />
      <ServiceCard
        title="Email Marketing"
        description="Create personalized email campaigns to keep your audience informed, generate leads, and improve customer retention with relevant and effective messages."
      />
    </div >
    </section>
  );
};

