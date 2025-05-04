import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Searchbar.css";


const SearchBar = () => {
  const navigate = useNavigate();
  const today = new Date();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  const [showGuestSelector, setShowGuestSelector] = useState(false);

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const guestSelectorRef = useRef(null);

  // Handle clicks outside elements to close popups
  useEffect(() => {
    function handleClickOutside(event) {
      if (checkInRef.current && !checkInRef.current.contains(event.target)) {
        setShowCheckInCalendar(false);
      }
      if (checkOutRef.current && !checkOutRef.current.contains(event.target)) {
        setShowCheckOutCalendar(false);
      }
      if (guestSelectorRef.current && !guestSelectorRef.current.contains(event.target)) {
        setShowGuestSelector(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar-container">
      <div className="search-bar p-3 d-flex align-items-center justify-content-between rounded-pill shadow-sm">
        {/* Check-in */}
        <div className="search-section position-relative" ref={checkInRef}>
          <span className="label">Check in</span>
          <Button
            variant="light"
            className="value-btn"
            onClick={() => {
              setShowCheckInCalendar(!showCheckInCalendar);
              setShowCheckOutCalendar(false); // Close check-out when opening check-in
            }}
          >
            {checkInDate ? checkInDate.toDateString() : "Add dates"}
          </Button>
          {showCheckInCalendar && (
            <div className="calendar-popup">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => {
                  setCheckInDate(date);
                  setShowCheckInCalendar(false);
                  if (checkOutDate && date >= checkOutDate) {
                    setCheckOutDate(null);
                  }
                }}
                inline
                minDate={today}
              />
            </div>
          )}
        </div>

        <div className="divider"></div>

        {/* Check-out */}
        <div className="search-section position-relative" ref={checkOutRef}>
          <span className="label">Check out</span>
          <Button
            variant="light"
            className="value-btn"
            onClick={() => {
              setShowCheckOutCalendar(!showCheckOutCalendar);
              setShowCheckInCalendar(false); // Close check-in when opening check-out
            }}
            disabled={!checkInDate}
          >
            {checkOutDate ? checkOutDate.toDateString() : "Add dates"}
          </Button>
          {showCheckOutCalendar && (
            <div className="calendar-popup">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => {
                  setCheckOutDate(date);
                  setShowCheckOutCalendar(false);
                }}
                inline
                minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : today}
              />
            </div>
          )}
        </div>

        <div className="divider"></div>

        {/* Guests */}
        <div className="search-section position-relative" ref={guestSelectorRef}>
          <span className="label">Who</span>
          <Button
            variant="light"
            className="value-btn text-muted"
            onClick={() => setShowGuestSelector(!showGuestSelector)}
          >
            {adults + children > 0 ? `${adults + children} guests` : "Add guest"}
          </Button>

          {showGuestSelector && (
            <div className="guest-popup">
              <div className="guest-option">
                <span>Adults</span>
                <div className="guest-controls">
                  <button onClick={() => setAdults(Math.max(0, adults - 1))}>-</button>
                  <span>{adults}</span>
                  <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>
              </div>
              <div className="guest-option">
                <span>Children</span>
                <div className="guest-controls">
                  <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                  <span>{children}</span>
                  <button onClick={() => setChildren(children + 1)}>+</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <Button
        className="search-btn rounded-circle"
        onClick={() => {
          navigate("/Query", {
            state: {
              checkInDate: checkInDate ? checkInDate.toISOString() : null,
              checkOutDate: checkOutDate ? checkOutDate.toISOString() : null,
              adults,
              children,
            },
          });
      }}
      >
        <i className="bi bi-search"></i>
      </Button>
      </div>
      </div>  
        );
        };

export default SearchBar;

