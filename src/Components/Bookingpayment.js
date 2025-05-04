import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import "./Bookingpayment.css";

const BookingPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { unit, checkInDate, checkOutDate, guests, numberOfNights } = location.state || {};

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    guestName: "",
    guestEmail: "",
    guestContact: "",
    nationality: "",
    idNumber: "",
    specialRequest: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const countries = [
    "Malaysia", "Singapore", "Thailand", "Indonesia", "Philippines",
    "Vietnam", "China", "India", "Japan", "South Korea",
    "United Kingdom", "United States", "Australia", "Germany", "France", "Canada"
  ];

  if (!unit) return <div>No unit selected for booking.</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      const formatted = value.replace(/[^0-9]/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
      setFormData({ ...formData, [name]: formatted });
    } else if (name === "expiry") {
      const digits = value.replace(/[^0-9]/g, "").slice(0, 4);
      const formatted = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
      setFormData({ ...formData, [name]: formatted });
    } else if (name === "cvv") {
      const trimmed = value.replace(/[^0-9]/g, "").slice(0, 4);
      setFormData({ ...formData, [name]: trimmed });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const getCardType = () => /^4/.test(formData.cardNumber) ? "visa" : /^5[1-5]/.test(formData.cardNumber) ? "mastercard" : null;
  const cardType = getCardType();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.guestEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingsRef = collection(db, "bookings");
      const bookingsQuery = query(bookingsRef, where("unitId", "==", unit.id), where("status", "==", "confirmed"));
      const bookingsSnapshot = await getDocs(bookingsQuery);

      let isDateConflict = false;
      bookingsSnapshot.forEach(doc => {
        const booking = doc.data();
        const bookedCheckIn = new Date(booking.checkInDate);
        const bookedCheckOut = new Date(booking.checkOutDate);
        const selectedCheckIn = new Date(checkInDate);
        const selectedCheckOut = new Date(checkOutDate);

        if ((selectedCheckIn < bookedCheckOut) && (selectedCheckOut > bookedCheckIn)) {
          isDateConflict = true;
        }
      });

      if (isDateConflict) {
        toast.error("Selected dates are already booked for this unit.");
        setIsSubmitting(false);
        return;
      }

      const newBooking = await addDoc(bookingsRef, {
        unitId: unit.id,
        buildingId: unit.buildingId,
        checkInDate,
        checkOutDate,
        guestName: formData.guestName,
        guestEmail: formData.guestEmail,
        guestContact: formData.guestContact,
        nationality: formData.nationality,
        idNumber: formData.idNumber,
        specialRequest: formData.specialRequest,
        status: "confirmed",
        createdAt: serverTimestamp()
      });

      const bookingId = newBooking.id;
      setBookingId(bookingId);

      await emailjs.send("service_9vy7f04", "template_vcsukas", {
        user_name: formData.guestName,
        user_email: formData.guestEmail,
        guest_contact: formData.guestContact,
        unit_number: unit.unitNumber,
        building_name: unit.buildingName,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        booking_id: bookingId,
        total_nights: numberOfNights,
        total_guests: guests,
        nationality: formData.nationality,
        id_number: formData.idNumber,
        special_request: formData.specialRequest || "None"
      }, "lRzyhKa6lYf-zNscy");
      
      await emailjs.send("service_9vy7f04", "template_9x76ver", {
        user_name: formData.guestName,
        user_email: formData.guestEmail,
        guest_contact: formData.guestContact,
        unit_number: unit.unitNumber,
        building_name: unit.buildingName,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        booking_id: bookingId,
        total_nights: numberOfNights,
        total_guests: guests,
        nationality: formData.nationality,
        id_number: formData.idNumber,
        special_request: formData.specialRequest || "None"
      }, "lRzyhKa6lYf-zNscy");
      

      setIsSuccess(true);
      setStep(3);
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-page">
      <div className={`booking-card step-${step}`}>
        <img src={unit.buildingImages?.[0] || ""} alt="Building Preview" className="building-image" />
        <h2>Booking {unit.unitNumber} – {unit.buildingName}</h2>

        <div className="summary-box">
          <p><strong>Check-in:</strong> {new Date(checkInDate).toDateString()}</p>
          <p><strong>Check-out:</strong> {new Date(checkOutDate).toDateString()}</p>
          <p><strong>Total Nights:</strong> {numberOfNights}</p>
          <p><strong>Total Guests:</strong> {guests}</p>
        </div>

        {step === 1 && (
          <form className="booking-form" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <h3>Guest Details</h3>
            <input name="guestName" placeholder="Full Name" value={formData.guestName} onChange={handleChange} required />
            <input name="guestEmail" type="email" placeholder="Email" value={formData.guestEmail} onChange={handleChange} required />
            <input name="guestContact" placeholder="Phone Number" value={formData.guestContact} onChange={handleChange} required />
            <select name="nationality" className="input-like" value={formData.nationality} onChange={handleChange} required>
              <option value="">Select Nationality</option>
              {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </select>
            <input name="idNumber" placeholder="ID / Passport Number" value={formData.idNumber} onChange={handleChange} required />
            <textarea name="specialRequest" placeholder="Special Requests (optional)" value={formData.specialRequest} onChange={handleChange} rows={3} />
            <button type="submit">Next: Payment</button>
          </form>
        )}

        {step === 2 && (
          <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Payment Details</h3>
            <div className="card-input-wrapper">
              <input name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
              {cardType && <FontAwesomeIcon icon={cardType === "visa" ? faCcVisa : faCcMastercard} className="card-icon" />}
            </div>
            <input name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} required />
            <input name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
            <p className="payment-note">This is a dummy payment form. No actual charge will be made.</p>
            <div className="form-footer">
              <button type="button" onClick={() => setStep(1)} className="back-btn">← Back to Guest Details</button>
              <button type="submit">Confirm & Pay</button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="form-step booking-confirmation">
            <h3><strong>Booking Confirmed 🎉</strong></h3>
            <p><strong>Booking ID:</strong> {bookingId}</p>
            <p><strong>Guest:</strong> {formData.guestName}</p>
            <p><strong>Email:</strong> {formData.guestEmail}</p>
            <p><strong>Contact:</strong> {formData.guestContact}</p>
            <p><strong>Nationality:</strong> {formData.nationality}</p>
            <p><strong>Check-in:</strong> {new Date(checkInDate).toDateString()}</p>
            <p><strong>Check-out:</strong> {new Date(checkOutDate).toDateString()}</p>
            <p><strong>Total Nights:</strong> {numberOfNights}</p>
            <p><strong>Guests:</strong> {guests}</p>
            <p><strong>Unit:</strong> {unit.unitNumber} - {unit.buildingName}</p>
            <p><strong>Special Requests:</strong> {formData.specialRequest || "None"}</p>
            <button className="back-home-btn" onClick={() => navigate("/")}>Return to Home</button>
          </div>
        )}

        {isSubmitting && (
          <div className="loading-overlay">
            <div className="loader"></div>
            <p>Processing Payment...</p>
          </div>
        )}

        {isSuccess && step !== 3 && (
          <div className="success-overlay">
            <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
            <p>Payment Successful!</p>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default BookingPayment;
