const services = {
    webDevelopment: {
        img: './assets/ferenc-almasi-hMYODfDWs9M-unsplash.jpg',
        description: 'We create high-performing, responsive websites that not only look great but also drive results. Whether you need a sleek corporate website, an e-commerce platform, or a custom web application, our web development team ensures a seamless user experience, optimized for speed, security, and mobile responsiveness. We work with the latest technologies and frameworks to build solutions that grow with your business.',
    },
    marketing: {
        img: './assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
        description: "Our marketing services are designed to help your business stand out in a competitive marketplace. From digital marketing strategies like SEO, social media management, and paid advertising, to content creation and branding, we provide comprehensive solutions to reach your target audience effectively and boost your online presence. Our team tailors campaigns to align with your business goals, ensuring maximum engagement and conversion.",
    },
    growthPartner: {
        img: './assets/Growthpartner.jpeg',
        description: "As a Growth Partner, we combine our marketing expertise and web development capabilities to offer an integrated approach to scaling your business. By aligning your marketing strategies with a robust digital infrastructure, we provide a comprehensive roadmap for growth. Our holistic approach focuses on driving traffic, improving user experience, increasing customer engagement, and ultimately, boosting revenue. Whether you're looking to expand your online presence or optimize your current digital assets, we partner with you to achieve sustainable growth.",
    }
};

const options = document.querySelectorAll('.servicesOption');
const image = document.getElementById('serviceImage');
const description = document.getElementById('serviceDescription');
const descriptionContainer = document.querySelector('.homeServicesDescription');

options.forEach(option => {
    option.addEventListener('click', function() {

        options.forEach(opt => opt.classList.remove('selected'));


        this.classList.add('selected');

        const service = this.getAttribute('data-services');

        descriptionContainer.classList.add('hidden');

        setTimeout(() => {
            console.log(service)
            image.src = services[service].img;
            description.textContent = services[service].description;

            descriptionContainer.classList.remove('hidden');
        }, 500); 
    });
});