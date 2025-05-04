// Contact.js
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import contactBg from "../Images/Background.jpg";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_9svzen8",
        "template_58omy5a",
        formRef.current,
        "kHvxxn681sWXsTzbu"
      )
      .then(() => {
        const form = formRef.current;
        return emailjs.send(
          "service_9svzen8",
          "template_qd6ocqs",
          {
            user_name: form.user_name.value,
            user_email: form.user_email.value,
          },
          "kHvxxn681sWXsTzbu"
        );
      })
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-page">
      <section
        className="contact-hero"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="hero-title">Contact Us</h1>
      </section>

      <ToastContainer position="top-right" autoClose={3000} />

      <section className="contact-main">
        <div className="contact-left">
          <h2>Get in Touch</h2>

          <div className="contact-item">
            <strong>Office</strong>
            <p>A-22-15, Jalan Tun Perak 75300, Malacca, Malaysia.</p>
          </div>

          <div className="contact-item">
            <strong>Website</strong>
            <p>www.alvivhomestay.com</p>
          </div>

          <div className="contact-item">
            <strong>Email</strong>
            <p>Alviv.airbnb@gmail.com</p>
          </div>

          <div className="contact-item">
            <strong>Phone</strong>
            <p>+6011-5854 5936</p>
          </div>

          <div className="contact-socials">
            <a href="https://www.facebook.com/alvivhomestaymelaka" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/alvivhomestay?igsh=bnV2NWhvbHM1dHlt" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=60183194139&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <h2>Send Us a Message</h2>
          <p>Our team will get right back to you.</p>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="user_name" required placeholder=" " />
              <label>Full Name</label>
            </div>

            <div className="form-group">
              <input type="email" name="user_email" required placeholder=" " />
              <label>Email</label>
            </div>

            <div className="form-group phone-field">
              <span className="country-code">+60</span>
              <input
                type="tel"
                name="user_contact"
                placeholder="12 345 6789"
                pattern="[0-9]{2} [0-9]{3} [0-9]{4}"
                title="Format: 12 345 6789"
                required
              />
            </div>

            <div className="form-group">
              <select name="user_service" required defaultValue="">
                <option value="" disabled>
                  I'm Interested in...
                </option>
                <option value="Interior Design">Interior Design</option>
                <option value="Property Agency">Property Agency</option>
                <option value="Property Management">Property Management</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="form-group">
              <textarea name="user_message" rows="5" required placeholder=" "></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;