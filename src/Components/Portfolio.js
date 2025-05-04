import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Footer from "./Footer";
import Atlantis1 from "../Images/Atlantis/Atlantis1.jpg";
import Atlantis2 from "../Images/Atlantis/Atlantis2.jpg";
import Atlantis3 from "../Images/Atlantis/Atlantis3.jpg";
import Atlantis4 from "../Images/Atlantis/Atlantis4.jpg";
import Atlantis5 from "../Images/Atlantis/Atlantis5.jpg";
import Atlantis6 from "../Images/Atlantis/Atlantis6.jpg";
import Atlantis7 from "../Images/Atlantis/Atlantis7.jpg";
import Atlantis8 from "../Images/Atlantis/Atlantis8.jpg";
import Atlantis9 from "../Images/Atlantis/Atlantis9.jpg";
import Atlantis10 from "../Images/Atlantis/Atlantis10.jpg";
import Atlantis11 from "../Images/Atlantis/Atlantis11.jpg";
import Atlantis12 from "../Images/Atlantis/Atlantis12.jpg";
import Atlantis13 from "../Images/Atlantis/Atlantis13.jpg";
import Atlantis14 from "../Images/Atlantis/Atlantis14.jpg";
import Atlantis15 from "../Images/Atlantis/Atlantis15.jpg";
import Atlantis16 from "../Images/Atlantis/Atlantis16.jpg";
import Atlantis17 from "../Images/Atlantis/Atlantis17.jpg";
import Atlantis18 from "../Images/Atlantis/Atlantis18.jpg";
import Atlantis19 from "../Images/Atlantis/Atlantis19.jpg";
import Atlantis20 from "../Images/Atlantis/Atlantis20.jpg";

import Bali1 from "../Images/Bali/Bali1.JPG";
import Bali2 from "../Images/Bali/Bali2.JPG";
import Bali3 from "../Images/Bali/Bali3.JPG";
import Bali4 from "../Images/Bali/Bali4.JPG";
import Bali5 from "../Images/Bali/Bali5.JPG";
import Bali6 from "../Images/Bali/Bali6.JPG";
import Bali7 from "../Images/Bali/Bali7.JPG";
import Bali8 from "../Images/Bali/Bali8.JPG";
import Bali9 from "../Images/Bali/Bali9.jpg";
import Bali10 from "../Images/Bali/Bali10.jpg";
import Bali11 from "../Images/Bali/Bali11.jpg";
import Bali12 from "../Images/Bali/Bali12.jpg";
import Bali13 from "../Images/Bali/Bali13.jpg";
import Bali14 from "../Images/Bali/Bali14.jpg";
import Bali15 from "../Images/Bali/Bali15.jpg";
import Bali16 from "../Images/Bali/Bali16.jpg";
import Bali17 from "../Images/Bali/Bali17.jpg";
import Bali18 from "../Images/Bali/Bali18.jpg";
import Bali19 from "../Images/Bali/Bali19.jpg";
import Bali20 from "../Images/Bali/Bali20.jpg";

import SC1 from "../Images/SC/SC1.jpg";
import SC2 from "../Images/SC/SC2.jpg";
import SC3 from "../Images/SC/SC3.jpg";
import SC4 from "../Images/SC/SC4.jpg";
import SC5 from "../Images/SC/SC5.jpg";
import SC6 from "../Images/SC/SC6.jpg";
import SC7 from "../Images/SC/SC7.jpg";
import SC8 from "../Images/SC/SC8.jpg";
import SC9 from "../Images/SC/SC9.jpg";
import SC10 from "../Images/SC/SC10.jpg";
import SC11 from "../Images/SC/SC11.jpg";
import SC12 from "../Images/SC/SC12.jpg";
import SC13 from "../Images/SC/SC13.jpg";
import SC14 from "../Images/SC/SC14.jpg";
import SC15 from "../Images/SC/SC15.jpg";
import SC16 from "../Images/SC/SC16.JPG";
import SC17 from "../Images/SC/SC17.JPG";
import SC18 from "../Images/SC/SC18.JPG";
import SC19 from "../Images/SC/SC19.JPG";
import SC20 from "../Images/SC/SC20.JPG";

import Shore1 from "../Images/Shore/Shore1.JPG";
import Shore2 from "../Images/Shore/Shore2.JPG";
import Shore3 from "../Images/Shore/Shore3.JPG";
import Shore4 from "../Images/Shore/Shore4.JPG";
import Shore5 from "../Images/Shore/Shore5.JPG";
import Shore6 from "../Images/Shore/Shore6.jpg";
import Shore7 from "../Images/Shore/Shore7.jpg";
import Shore8 from "../Images/Shore/Shore8.jpg";
import Shore9 from "../Images/Shore/Shore9.jpg";
import Shore10 from "../Images/Shore/Shore10.jpg";
import Shore11 from "../Images/Shore/Shore11.jpg";
import Shore12 from "../Images/Shore/Shore12.jpg";
import Shore13 from "../Images/Shore/Shore13.jpg";
import Shore14 from "../Images/Shore/Shore14.jpg";
import Shore15 from "../Images/Shore/Shore15.jpg";
import Shore16 from "../Images/Shore/Shore16.jpg";
import Shore17 from "../Images/Shore/Shore17.jpg";
import Shore18 from "../Images/Shore/Shore18.jpg";
import Shore19 from "../Images/Shore/Shore19.jpg";
import Shore20 from "../Images/Shore/Shore20.jpg";

import Bayou1 from "../Images/Bayou/Bayou1.jpg";
import Bayou2 from "../Images/Bayou/Bayou2.jpg";
import Bayou3 from "../Images/Bayou/Bayou3.jpg";
import Bayou4 from "../Images/Bayou/Bayou4.jpg";
import Bayou5 from "../Images/Bayou/Bayou5.jpg";
import Bayou6 from "../Images/Bayou/Bayou6.JPG";
import Bayou7 from "../Images/Bayou/Bayou7.JPG";
import Bayou8 from "../Images/Bayou/Bayou8.JPG";
import Bayou9 from "../Images/Bayou/Bayou9.JPG";
import Bayou10 from "../Images/Bayou/Bayou10.JPG";
import Bayou11 from "../Images/Bayou/Bayou11.JPG";
import Bayou12 from "../Images/Bayou/Bayou12.JPG";
import Bayou13 from "../Images/Bayou/Bayou13.JPG";
import Bayou14 from "../Images/Bayou/Bayou14.JPG";
import Bayou15 from "../Images/Bayou/Bayou15.JPG";
import Bayou16 from "../Images/Bayou/Bayou16.jpg";
import Bayou17 from "../Images/Bayou/Bayou17.jpg";
import Bayou18 from "../Images/Bayou/Bayou18.jpg";
import Bayou19 from "../Images/Bayou/Bayou19.jpg";
import Bayou20 from "../Images/Bayou/Bayou20.jpg";

import Pines1 from "../Images/Pines/Pines1.JPG";
import Pines2 from "../Images/Pines/Pines2.JPG";
import Pines3 from "../Images/Pines/Pines3.JPG";
import Pines4 from "../Images/Pines/Pines4.JPG";
import Pines5 from "../Images/Pines/Pines5.JPG";
import Pines6 from "../Images/Pines/Pines6.jpg";
import Pines7 from "../Images/Pines/Pines7.jpg";
import Pines8 from "../Images/Pines/Pines8.jpg";
import Pines9 from "../Images/Pines/Pines9.jpg";
import Pines10 from "../Images/Pines/Pines10.jpg";
import Pines11 from "../Images/Pines/Pines11.JPG";
import Pines12 from "../Images/Pines/Pines12.JPG";
import Pines13 from "../Images/Pines/Pines13.JPG";
import Pines14 from "../Images/Pines/Pines14.JPG";
import Pines15 from "../Images/Pines/Pines15.JPG";
import Pines16 from "../Images/Pines/Pines16.jpg";
import Pines17 from "../Images/Pines/Pines17.jpg";
import Pines18 from "../Images/Pines/Pines18.jpg";
import Pines19 from "../Images/Pines/Pines19.jpg";
import Pines20 from "../Images/Pines/Pines20.jpg";

import AC1 from "../Images/AC/AC1.JPG";
import AC2 from "../Images/AC/AC2.JPG";
import AC3 from "../Images/AC/AC3.JPG";
import AC4 from "../Images/AC/AC4.JPG";
import AC5 from "../Images/AC/AC5.JPG";
import AC6 from "../Images/AC/AC6.jpg";
import AC7 from "../Images/AC/AC7.jpg";
import AC8 from "../Images/AC/AC8.jpg";
import AC9 from "../Images/AC/AC9.jpg";
import AC10 from "../Images/AC/AC10.jpg";
import AC11 from "../Images/AC/AC11.jpg";
import AC12 from "../Images/AC/AC12.JPG";
import AC13 from "../Images/AC/AC13.JPG";
import AC14 from "../Images/AC/AC14.JPG";
import AC15 from "../Images/AC/AC15.JPG";
import AC16 from "../Images/AC/AC16.JPG";
import AC17 from "../Images/AC/AC17.JPG";
import AC18 from "../Images/AC/AC18.JPG";
import AC19 from "../Images/AC/AC19.JPG";
import AC20 from "../Images/AC/AC20.JPG";

import Imperior1 from "../Images/Imperior/Imperior1.jpg";
import Imperior2 from "../Images/Imperior/Imperior2.jpg";
import Imperior3 from "../Images/Imperior/Imperior3.jpg";
import Imperior4 from "../Images/Imperior/Imperior4.jpg";
import Imperior5 from "../Images/Imperior/Imperior5.jpg";
import Imperior6 from "../Images/Imperior/Imperior6.jpg";
import Imperior7 from "../Images/Imperior/Imperior7.jpg";
import Imperior8 from "../Images/Imperior/Imperior8.jpg";
import Imperior9 from "../Images/Imperior/Imperior9.jpg";
import Imperior10 from "../Images/Imperior/Imperior10.jpg";
import Imperior11 from "../Images/Imperior/Imperior11.jpg";
import Imperior12 from "../Images/Imperior/Imperior12.jpg";
import Imperior13 from "../Images/Imperior/Imperior13.jpg";
import Imperior14 from "../Images/Imperior/Imperior14.jpg";
import Imperior15 from "../Images/Imperior/Imperior15.jpg";
import Imperior16 from "../Images/Imperior/Imperior16.jpg";
import Imperior17 from "../Images/Imperior/Imperior17.jpg";
import Imperior18 from "../Images/Imperior/Imperior18.jpg";
import Imperior19 from "../Images/Imperior/Imperior19.jpg";
import Imperior20 from "../Images/Imperior/Imperior20.jpg";

import User1 from "../Images/Reviews/User1.jpg";
import User2 from "../Images/Reviews/User2.jpg";
import User3 from "../Images/Reviews/User3.jpg";
import User4 from "../Images/Reviews/User4.jpg";
import User5 from "../Images/Reviews/User5.jpg";

import Work1 from "../Images/Work1.jpg";
import Work2 from "../Images/Work2.jpg";
import Work3 from "../Images/Work3.jpg";
import Work4 from "../Images/Work4.jpeg";
import Work5 from "../Images/Work5.jpeg";
import Work6 from "../Images/Work6.jpg";
import Work7 from "../Images/Work7.jpg";
import Work8 from "../Images/Work8.jpg";

const propertyThumbnails = {
  "Atlantis Residence": Work1,
  "Bali Residence": Work2,
  "Silverscape Residence": Work3,
  "The Shore Residence": Work4,
  "Bayou Lagoon Residence": Work5,
  "The Pines Hotel": Work6,
  "Amber Cove Residence": Work7,
  "Imperior Residence": Work8,
};

const imageMap = {
  "Atlantis Residence": [
    Atlantis1, Atlantis2, Atlantis3, Atlantis4, Atlantis5,
    Atlantis6, Atlantis7, Atlantis8, Atlantis9, Atlantis10,
    Atlantis11, Atlantis12, Atlantis13, Atlantis14, Atlantis15,
    Atlantis16, Atlantis17, Atlantis18, Atlantis19, Atlantis20,
  ],
  "Bali Residence": [
    Bali1,Bali2,Bali3,Bali4,Bali5,Bali6,Bali7,Bali8,Bali9,Bali10,
    Bali11,Bali12,Bali13,Bali14,Bali15,Bali16,Bali17,Bali18,Bali19,Bali20,
  ],
  "Silverscape Residence": [
    SC1,SC2,SC3,SC4,SC5,SC6,SC7,SC8,SC9,SC10,
    SC11,SC12,SC13,SC14,SC15,SC16,SC17,SC18,SC19,SC20,
  ],
  "The Shore Residence": [
    Shore1,Shore2,Shore3,Shore4,Shore5,Shore6,Shore7,Shore8,Shore9,Shore10,
    Shore11,Shore12,Shore13,Shore14,Shore15,Shore16,Shore17,Shore18,Shore19,Shore20,
  ],
  "Bayou Lagoon Residence": [
    Bayou1,Bayou2,Bayou3,Bayou4,Bayou5,Bayou6,Bayou7,Bayou8,Bayou9,Bayou10,
    Bayou11,Bayou12,Bayou13,Bayou14,Bayou15,Bayou16,Bayou17,Bayou18,Bayou19,Bayou20,
  ],
  "The Pines Hotel": [
    Pines1,Pines2,Pines3,Pines4,Pines5,Pines6,Pines7,Pines8,Pines9,Pines10,
    Pines11,Pines12,Pines13,Pines14,Pines15,Pines16,Pines17,Pines18,Pines19,Pines20,
  ],
  "Amber Cove Residence": [
    AC1,AC2,AC3,AC4,AC5,AC6,AC7,AC8,AC9,AC10,
    AC11,AC12,AC13,AC14,AC15,AC16,AC17,AC18,AC19,AC20,
  ],
  "Imperior Residence": [
    Imperior1,Imperior2,Imperior3,Imperior4,Imperior5,
    Imperior6,Imperior7,Imperior8,Imperior9,Imperior10,
    Imperior11,Imperior12,Imperior13,Imperior14,Imperior15,
    Imperior16,Imperior17,Imperior18,Imperior19,Imperior20,
  ],
};

const Portfolio = () => {
  const properties = Object.keys(imageMap);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleBoxClick = (property) => {
    setSelectedProperty(property);
    setModalOpen(true);
    setCurrentImageIndex(null);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProperty(null);
    setCurrentImageIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen || currentImageIndex === null) return;
  
      if (e.key === "ArrowRight") {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % imageMap[selectedProperty].length
        );
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex - 1 + imageMap[selectedProperty].length) % imageMap[selectedProperty].length
        );
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, currentImageIndex, selectedProperty]);

  return (
    <div className="portfolio-page">
      {/* Header Section */}
      <section className="portfolio-header">
    <div className="portfolio-header-content">
    <h1>Portfolio</h1>
    <p className="portfolio-subtitle">
    Check out some of the selected projects we’ve worked on.
    </p>
    </div>
    </section>

      {/* Property Grid */}
      <section className="property-grid">
  {properties.map((property, index) => (
    <div
      key={index}
      className="property-box"
      style={{
        backgroundImage: `url(${propertyThumbnails[property]})`,
        "--delay": `${index * 0.1}s`
      }}
      onClick={() => handleBoxClick(property)}
    >
      <div className="property-overlay" />
      <span className="property-title">{property}</span>
    </div>
  ))}
</section>

      {/* Modal - Gallery View */}
      {modalOpen && selectedProperty && currentImageIndex === null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedProperty}</h2>
              <button className="close-btn top-close" onClick={closeModal}>×</button>
            </div>
            <div className="image-gallery">
              {imageMap[selectedProperty].map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`View ${i + 1}`}
                  onClick={() => setCurrentImageIndex(i)}
                  className="clickable"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Zoom View */}
      {modalOpen && selectedProperty && currentImageIndex !== null && (
        <div className="fullscreen-overlay" onClick={() => setCurrentImageIndex(null)}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <div className="fullscreen-header">
              <button className="gallery-back" onClick={() => setCurrentImageIndex(null)}>
                ← Back
              </button>
              <h2 className="fullscreen-title">{selectedProperty}</h2>
              <button className="close-btn top-close" onClick={closeModal}>×</button>
            </div>

            <div className="fullscreen-wrapper">
              <button
                className="nav-arrow outside-left"
                onClick={() =>
                  setCurrentImageIndex(
                    (currentImageIndex - 1 + imageMap[selectedProperty].length) %
                    imageMap[selectedProperty].length
                  )
                }
              >
                ←
              </button>

              <div className="fullscreen-image-wrapper">
                <img
                  src={imageMap[selectedProperty][currentImageIndex]}
                  alt={`Fullscreen ${currentImageIndex + 1}`}
                  className="fullscreen-image"
                />
                <div className="image-counter">
                {currentImageIndex + 1} / {imageMap[selectedProperty].length}
                </div>

              </div>

              <button
                className="nav-arrow outside-right"
                onClick={() =>
                  setCurrentImageIndex((currentImageIndex + 1) % imageMap[selectedProperty].length)
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

<section className="testimonials">
  <h2>What Our Guests Say</h2>
  <div className="testimonial-grid">

    {/* Testimonial 1 */}
    <div className="testimonial-card">
      <img src={User1} alt="User 1" className="testimonial-img" />
      <div className="testimonial-info">
        <div className="testimonial-name">Michelle T.</div>
        <div className="testimonial-stars">
          <div className="stars-outer">
          <div className="stars-inner"></div>
          </div>
        </div>
        <p className="quote-icon">“</p>
        <p>"The Bali Residence was absolutely perfect. Clean, beautiful, and close to everything!"</p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="testimonial-card">
      <img src={User2} alt="User 2" className="testimonial-img" />
      <div className="testimonial-info">
        <div className="testimonial-name">Jason L.</div>
        <div className="testimonial-stars">
          <div className="stars-outer">
          <div className="stars-inner"></div>
          </div>
        </div>
        <p className="quote-icon">“</p>
        <p>"Atlantis Residence was modern and cozy. Amazing sea view from the balcony!"</p>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="testimonial-card">
      <img src={User3} alt="User 3" className="testimonial-img" />
      <div className="testimonial-info">
        <div className="testimonial-name">Amira S.</div>
        <div className="testimonial-stars">
          <div className="stars-outer">
          <div className="stars-inner"></div>
          </div>
        </div>
        <p className="quote-icon">“</p>
        <p>"Loved our stay at The Shore. Perfect for a relaxing weekend getaway."</p>
      </div>
    </div>

    {/* Testimonial 4 */}
    <div className="testimonial-card">
      <img src={User4} alt="User 4" className="testimonial-img" />
      <div className="testimonial-info">
        <div className="testimonial-name">Daniel K.</div>
        <div className="testimonial-stars">
          <div className="stars-outer">
          <div className="stars-inner"></div>
          </div>
        </div>
        <p className="quote-icon">“</p>
        <p>"Super easy check-in and a spotless unit at Bayou Lagoon. Will definitely come back!"</p>
      </div>
    </div>

    {/* Testimonial 5 */}
    <div className="testimonial-card"> 
      <img src={User5} alt="User 5" className="testimonial-img" />
      <div className="testimonial-info">
        <div className="testimonial-name">Sophia W.</div>
        <div className="testimonial-stars">
          <div className="stars-outer">
          <div className="stars-inner"></div>
          </div>
        </div>
        <p className="quote-icon">“</p>
        <p>"Our family had a fantastic holiday at Amber Cove Residence. So spacious and comfy!"</p>
      </div>
    </div>

  </div>
</section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Portfolio;
