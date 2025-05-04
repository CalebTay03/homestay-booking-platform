import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Homepage.css";
import Footer from "./Footer";
import FAQ from "./Faq";
import brand1 from "../Images/Brand1.png"; // Example brand logo
import brand2 from "../Images/Brand2.png"; // Example brand logo
import brand3 from "../Images/Brand3.png"; 
import brand4 from "../Images/Brand4.png"; 
import brand5 from "../Images/Brand5.png"; 
import brand6 from "../Images/Brand6.png";
import service1 from "../Images/Interiordesign.png"; // Replace with actual image paths
import service2 from "../Images/Propertyagency.jpg";
import service3 from "../Images/Propertymangement.webp";
import service4 from "../Images/Cleaning.jpg";
import Work1 from "../Images/Work1.jpg";
import Work2 from "../Images/Work2.jpg";
import Work3 from "../Images/Work3.jpg";
import Work4 from "../Images/Work4.jpeg";
import Work5 from "../Images/Work5.jpeg";
import Work6 from "../Images/Work6.jpg";
import Work7 from "../Images/Work7.jpg";
import Work8 from "../Images/Work8.jpg";

const projects = [
  { image: Work1, title: "Atlantis Residence" },
  { image: Work2, title: "Bali Reisdence" },
  { image: Work3, title: "Silvercape Residence" },
  { image: Work4, title: "The Shore Residence" },
  { image: Work5, title: "Bayouu Lagoon Residence" },
  { image: Work6, title: "The Pines Hotel" },
  { image: Work7, title: "Amber Cove Residence" },
  { image: Work8, title: "Imperior Reisdence" },
];


const brandImages = [brand1, brand2, brand3, brand4, brand5, brand6];

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Introduction Section */}
      <section className="column introduction">
        <h1>Welcome to Alviv Homestay</h1>
        <h2>
          We're more than just a property management company. Our business
          improves the way you live and work where people and spaces are
          involved.
        </h2>

        {/* Row of 4 Columns with Images */}
        <div className="services-row">
          <div className="service">
            <img src={service1} alt="Service 1" />
            <h3>Interior Design</h3>
            <p>We transform spaces with thoughtful design, creating a stylish and inviting atmosphere that guests love.</p>
          </div>
          <div className="service">
            <img src={service2} alt="Service 2" />
            <h3>Property Agency</h3>
            <p>From listing to closing, we connect you with the right buyers through strategic marketing and industry expertise.</p>
          </div>
          <div className="service">
            <img src={service3} alt="Service 3" />
            <h3>Property Management</h3>
            <p>We take care of everything—guest communication, bookings, and maintenance—so you can enjoy stress-free hosting.</p>
          </div>
          <div className="service">
            <img src={service4} alt="Service 4" />
            <h3>Cleaning Maintenance</h3>
            <p>Our professional cleaning team ensures your property is spotless and guest-ready after every stay.</p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
<section className="column brands">
  <h2>Our Partners</h2>
  <div className="brand-logos">
  <div className="logo-slider">
  {[...brandImages, ...brandImages, ...brandImages, ...brandImages].map((img, index) => (
    <img src={img} alt={`Brand ${index % brandImages.length + 1}`} key={index} />
  ))}
</div>

  </div>
</section>

{/* Our Work Section */}
<section className="column our-work">
  <h2>Our Work</h2>
  <p>
    Below are the selected projects that we’ve worked on in the past.
    They’re the reasons why we’re proud to say that we’re one of the top  
    property management companies in Malacca, Malaysia.
  </p>

  {/* Swiper Carousel */}
  <Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={"auto"}
  loop={true}
  autoplay={{ delay: 3000 }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  }}
  navigation={true}
  modules={[EffectCoverflow, Navigation, Autoplay]}
  className="ourwork-swiper"
>
  {projects.map((project, index) => (
    <SwiperSlide key={index} className="ourwork-slide">
      <img src={project.image} alt={project.title} />
      <div className="overlay">
        <h3>{project.title}</h3>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

  {/* View Full Portfolio Button */}
  <div className="view-portfolio">
    <a href="/Portfolio" className="portfolio-button">
      View Full Portfolio
    </a>
  </div>
</section>

      {/* FAQ Section */}
      <section className="column faq">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>
          Have questions? We have answers. Check out our frequently asked
          questions to learn more about our services.
        </p>
        <FAQ />
      </section>

  {/* Footer */}
  <Footer/>
    </div>
  );
};

export default HomePage;
