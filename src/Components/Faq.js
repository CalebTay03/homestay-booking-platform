import React, { useState, useRef } from "react";

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]); // Allow multiple open items
  const contentRefs = useRef([]); // Store refs in an array

  const toggleFAQ = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index) // Close if already open
        : [...prevIndexes, index] // Open if closed
    );
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide property management, interior design, cleaning & maintenance, and property agency services.",
    },
    {
      question: "How do I list my property with you?",
      answer: "You can contact us via email or phone to start the listing process. Our team will assist you with the necessary steps.",
    },
    {
      question: "Do you handle guest bookings?",
      answer: "Yes, we manage all guest communications, bookings, and check-ins to ensure a seamless experience.",
    },
    {
      question: "What are the benefits of using your property management service?",
      answer: "We handle everything from marketing, maintenance, and guest services, allowing you to earn passive income stress-free.",
    },
    {
      question: "Do you need a real estate license to manage Airbnb property?",
      answer: "No, you don’t need a real estate license to manage an Airbnb property.",
    },
    {
      question: "Does Airbnb offer property management services?",
      answer: "Yes, Airbnb does offer property management services by offering a local partner to help take care of your properties. However, there are specific requirements to be eligible of becoming a local partner.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="faq-answer"
                style={{
                  height: isOpen ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
