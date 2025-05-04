import React from "react";
import "./Aboutus.css";
import Footer from "./Footer";
import CEO from "../Images/Team/Alex.avif";
import Cofounder from "../Images/Team/Vivian.avif";
import Markerting from "../Images/Team/Alan.avif";
import Technical from "../Images/Team/Sara.avif";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <h1>About Us</h1>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Alviv was born in Malacca, Malaysia in 2017 with the idea of giving back property
          owners more time and money in their pockets. We understand the pains of managing multiple 
          properties on a day to day basis. We’re here to help.
        </p>
      </section>

      {/* Vision & Mission Section */}
<section className="vision-mission">
  <h2>Our Vision & Mission</h2>
  <p>
    At Alviv, our vision is to revolutionize property management through
    innovation and trust. Our mission is to simplify the lives of property
    owners by delivering efficient, transparent, and personalized services.
  </p>
</section>

{/* Meet the Team Section */}
<section className="meet-team">
  <h2>Meet the Team</h2>
  <div className="team-tree">
    <div className="tree-node ceo">
      <img src={CEO} alt="Alex" />
      <h3>Alex</h3>
      <p>Founder & CEO</p>
    </div>

    <div className="tree-branches">
      <div className="tree-node">
        <img src={Cofounder} alt="Vivian" />
        <h3>Vivian</h3>
        <p>Co-Founder</p>
      </div>
      <div className="tree-node">
        <img src={Markerting} alt="Alan" />
        <h3>Alan Lim</h3>
        <p>Marketing Manager</p>
      </div>
      <div className="tree-node">
        <img src={Technical} alt="Sara" />
        <h3>Sara Ng</h3>
        <p>Technical Lead</p>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default AboutUs;
