import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Unitdetails.css";

const UnitDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    unit,
    checkInDate: initCheckIn,
    checkOutDate: initCheckOut,
    adults: initAdults = 1,
    children: initChildren = 0,
  } = location.state || {};

  const [checkIn, setCheckIn] = useState(initCheckIn ? new Date(initCheckIn) : null);
  const [checkOut, setCheckOut] = useState(initCheckOut ? new Date(initCheckOut) : null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [adults, setAdults] = useState(initAdults);
  const [children, setChildren] = useState(initChildren);
  const [numberOfNights, setNumberOfNights] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [priceDetails, setPriceDetails] = useState({ base: 0, serviceFee: 0, sst: 0 });
  const [validationError, setValidationError] = useState("");
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const calendarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (!unit || !checkIn || !checkOut) return;

    const diff = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    if (diff <= 0) {
      setValidationError("Check-out must be after check-in.");
      setNumberOfNights(1);
      setTotalPrice(0);
    } else {
      setValidationError("");
      setNumberOfNights(diff);
      const base = unit.pricePerNight * diff;
      const serviceFee = base * 0.1;
      const sst = base * 0.06;
      setPriceDetails({ base, serviceFee, sst });
      setTotalPrice(base + serviceFee + sst);
    }
  }, [checkIn, checkOut, unit]);

  const handleSelect = ({ selection }) => {
    const clicked = selection.startDate;
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(clicked);
      setCheckOut(null);
    } else if (clicked > checkIn) {
      setCheckOut(clicked);
    } else {
      setCheckIn(clicked);
      setCheckOut(null);
    }
  };

  const handleBookNow = () => {
    if (validationError || !checkIn || !checkOut) return;
    navigate(`/payment/${unit.id}`, {
      state: {
        unit,
        checkInDate: checkIn,
        checkOutDate: checkOut,
        guests: adults + children,
        numberOfNights,
        total: totalPrice,
      },
    });
  };

  const convertGoogleDriveLink = (link) => {
    const match = link?.match(/\/d\/([^/]+)\//);
    return match ? `https://drive.google.com/uc?id=${match[1]}` : link;
  };

  if (!unit) return <div>No unit details found.</div>;

  return (
    <div className="unit-detail-page">
      <h1 className="unit-title">{unit.buildingName} - {unit.unitNumber}</h1>

      <div className="image-section">
        <div className="image-grid">
          <div className="main-image">
            <img src={convertGoogleDriveLink(unit.buildingImages?.[0])} alt="Building" />
          </div>
          <div className="small-images">
            {unit.images?.slice(0, 4).map((img, idx) => (
              <img key={idx} src={img} alt={`Unit ${idx}`} />
            ))}
          </div>
        </div>
        <button className="see-all-btn" onClick={() => setModalOpen(true)}>
          📸 See all {unit.images?.length} photos
        </button>
      </div>

      <div className="unit-body">
        <div className="unit-info">
          <h2>Unit Details</h2>
          <p><strong>Price:</strong> RM{unit.pricePerNight} / night</p>
          <p><strong>Max Guests:</strong> {unit.maxGuests}</p>
          <p><strong>Bedrooms:</strong> {unit.numberOfBedrooms}</p>
          <p><strong>Amenities:</strong> {unit.amenities?.join(", ") || "N/A"}</p>

          {unit.rooms?.length > 0 && (
            <>
              <h3>Room Layout</h3>
              <ul>{unit.rooms.map((room, idx) => <li key={idx}>{room}</li>)}</ul>
            </>
          )}

          <h2>About {unit.buildingName}</h2>
          <p>{unit.buildingDescription}</p>

          {unit.buildingAmenities?.length > 0 && (
            <>
              <h3>Building Amenities</h3>
              <ul>{unit.buildingAmenities.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            </>
          )}
        </div>

        <div className="booking-summary">
          <div className="summary-box">
            <h2>Booking Summary</h2>

            <label>Date Range</label>
            <div className="date-input" onClick={() => setShowCalendar(true)}>
              {checkIn ? checkIn.toDateString() : "Check-in"} — {checkOut ? checkOut.toDateString() : "Check-out"}
            </div>

            {showCalendar && (
              <div ref={calendarRef}>
                <DateRange
                  onChange={handleSelect}
                  moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  ranges={[{
                    startDate: checkIn || new Date(),
                    endDate: checkOut || (checkIn ? checkIn : addDays(new Date(), 1)),
                    key: "selection",
                  }]}
                  locale={enUS}
                />
              </div>
            )}

            <label>Guests</label>
            <div className="guest-dropdown">
              <select value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                {[...Array(unit.maxGuests)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1} Adult{(i + 1) > 1 ? "s" : ""}</option>
                ))}
              </select>
              <select value={children} onChange={(e) => setChildren(Number(e.target.value))}>
                {[...Array(5)].map((_, i) => (
                  <option key={i} value={i}>{i} Child{(i !== 1 ? "ren" : "")}</option>
                ))}
              </select>
            </div>

            {validationError && <div className="validation-error">{validationError}</div>}

            <p><strong>Nights:</strong> {numberOfNights}</p>
            <p>
              <strong>Total Price:</strong>{" "}
              <span className="price-toggle" onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}>
                RM{totalPrice.toFixed(2)} {showPriceBreakdown ? "▲" : "▼"}
              </span>
            </p>

            {showPriceBreakdown && (
              <div className="price-breakdown">
                <p>Base Price: RM{priceDetails.base.toFixed(2)}</p>
                <p>Service Fee (10%): RM{priceDetails.serviceFee.toFixed(2)}</p>
                <p>SST (6%): RM{priceDetails.sst.toFixed(2)}</p>
              </div>
            )}

            <button
              className="book-button"
              onClick={handleBookNow}
              disabled={!checkIn || !checkOut || !!validationError}
            >
              📅 Book Now
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{unit.unitNumber} - {unit.buildingName}</h2>
              <button className="close-btn top-close" onClick={() => setModalOpen(false)}>×</button>
            </div>
            <div className="image-gallery">
              {unit.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`View ${i + 1}`}
                  onClick={() => setCurrentImageIndex(i)}
                  className="clickable"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {modalOpen && currentImageIndex !== null && (
        <div className="fullscreen-overlay" onClick={() => setCurrentImageIndex(null)}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <div className="fullscreen-header">
              <button className="gallery-back" onClick={() => setCurrentImageIndex(null)}>
                ← Back
              </button>
              <h2 className="fullscreen-title">{unit.unitNumber}</h2>
              <button className="close-btn top-close" onClick={() => setModalOpen(false)}>×</button>
            </div>
            <div className="fullscreen-wrapper">
              <button
                className="nav-arrow outside-left"
                onClick={() =>
                  setCurrentImageIndex(
                    (currentImageIndex - 1 + unit.images.length) % unit.images.length
                  )
                }
              >
                ←
              </button>
              <div className="fullscreen-image-wrapper">
                <img
                  src={unit.images[currentImageIndex]}
                  alt={`Fullscreen ${currentImageIndex + 1}`}
                  className="fullscreen-image"
                />
                <div className="image-counter">
                  {currentImageIndex + 1} / {unit.images.length}
                </div>
              </div>
              <button
                className="nav-arrow outside-right"
                onClick={() =>
                  setCurrentImageIndex((currentImageIndex + 1) % unit.images.length)
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitDetail;