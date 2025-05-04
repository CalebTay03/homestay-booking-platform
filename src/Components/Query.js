import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useLocation, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./Query.css";

const Query = () => {
  const location = useLocation();
  const { checkInDate, checkOutDate, adults = 1, children = 0 } = location.state || {};
  const totalGuests = adults + children;

  const [units, setUnits] = useState([]);
  const [filteredUnits, setFilteredUnits] = useState([]);
  const [buildingOptions, setBuildingOptions] = useState([]);
  const [selectedBuildings, setSelectedBuildings] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [numberOfRooms, setNumberOfRooms] = useState("");

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const buildingsSnapshot = await getDocs(collection(db, "buildings"));
        const allUnits = [];

        for (const buildingDoc of buildingsSnapshot.docs) {
          const buildingData = buildingDoc.data();
          const unitsSnapshot = await getDocs(collection(db, `buildings/${buildingDoc.id}/units`));

          const buildingUnits = unitsSnapshot.docs.map((unitDoc) => ({
            id: unitDoc.id,
            buildingId: buildingDoc.id,
            buildingName: buildingData.name,
            buildingAddress: buildingData.address,
            buildingDescription: buildingData.description,
            buildingImages: buildingData.images,
            buildingAmenities: buildingData.amenities,
            ...unitDoc.data(),
          }));

          allUnits.push(...buildingUnits);
        }

        const availableUnits = allUnits.filter((unit) => unit.maxGuests >= totalGuests);
        setUnits(availableUnits);
        setFilteredUnits(availableUnits);

        const buildingNames = [...new Set(availableUnits.map((unit) => unit.buildingName))];
        setBuildingOptions(buildingNames);
      } catch (error) {
        console.error("Error fetching units:", error);
      }
    };

    fetchUnits();
  }, [totalGuests]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };

  const handleBuildingChange = (building) => {
    setSelectedBuildings((prev) =>
      prev.includes(building) ? prev.filter((b) => b !== building) : [...prev, building]
    );
  };

  const handleFilter = () => {
    let temp = [...units];

    if (selectedBuildings.length > 0) {
      temp = temp.filter((u) => selectedBuildings.includes(u.buildingName));
    }

    temp = temp.filter((u) => u.pricePerNight >= priceRange[0] && u.pricePerNight <= priceRange[1]);

    if (numberOfRooms) {
      temp = temp.filter((u) => u.numberOfBedrooms === parseInt(numberOfRooms));
    }

    setFilteredUnits(temp);
  };

  const handleClearFilters = () => {
    setSelectedBuildings([]);
    setPriceRange([0, 1000]);
    setNumberOfRooms("");
    setFilteredUnits(units);
  };

  return (
    <div className="query-container">
      {/* Sidebar Filters */}
      <div className="sidebar">
        <h3>Filter</h3>

        {/* Buildings */}
        <div className="checkbox-group">
          <label><strong>Buildings</strong></label>
          <div className="building-list">
            {buildingOptions.map((building, idx) => (
              <div
                key={idx}
                className={`building-option ${selectedBuildings.includes(building) ? "selected" : ""}`}
                onClick={() => handleBuildingChange(building)}
              >
                {building}
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <label><strong>Price Range (RM)</strong></label>
        <div className="price-slider">
          <ReactSlider
            className="range-slider"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
            renderTrack={(props, state) => {
              const colors = ["#ddd", "#007bff", "#ddd"];
              return (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    backgroundColor: colors[state.index],
                    height: "100%",
                    borderRadius: "3px",
                  }}
                />
              );
            }}
          />
          <div className="price-values">RM {priceRange[0]} – RM {priceRange[1]}</div>
        </div>

        {/* Bedrooms */}
        <label><strong>Number of Bedrooms</strong></label>
        <select value={numberOfRooms} onChange={(e) => setNumberOfRooms(e.target.value)}>
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>

        {/* Filter Buttons */}
        <button onClick={handleFilter}>Apply Filters</button>
        <button onClick={handleClearFilters}>Clear All Filters</button>
      </div>

      {/* Units Listing */}
      <div className="unit-header">
        <h1>Available Units</h1>
        <div className="unit-info-box">
          <div className="info-item">
            <i className="fa-regular fa-calendar"></i>
            <span><strong>Check-in:</strong> {checkInDate ? new Date(checkInDate).toDateString() : "Anytime"}</span>
          </div>
          <div className="info-item">
            <i className="fa-regular fa-calendar-check"></i>
            <span><strong>Check-out:</strong> {checkOutDate ? new Date(checkOutDate).toDateString() : "Anytime"}</span>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-user-group"></i>
            <span><strong>Guests:</strong> {totalGuests}</span>
          </div>
        </div>

        {filteredUnits.length === 0 ? (
          <p style={{ marginTop: 20, fontWeight: "bold" }}>No units found matching your filter.</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 20 }}>
            {filteredUnits.map((unit) => (
              <Link
                key={unit.id}
                to={`/Unit/${unit.id}`}
                state={{
                  unit,
                  checkInDate: formatDate(checkInDate),
                  checkOutDate: formatDate(checkOutDate),
                  adults,
                  children,
                }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div style={{ border: "1px solid #ccc", padding: 10, borderRadius: 10, width: 250 }}>
                  <div className="swiper-container-wrapper">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={1}
                      className="unit-swiper"
                    >
                      {unit.images?.slice(0, 5).map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={imgUrl}
                            alt={`Image ${index + 1}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="unit-details">
                    <p><strong>Unit:</strong> {unit.unitNumber}</p>
                    <p><strong>Building:</strong> {unit.buildingName}</p>
                    <p><strong>Price:</strong> RM{unit.pricePerNight} / night</p>
                    <p><strong>Bedrooms:</strong> {unit.numberOfBedrooms || "N/A"}</p>
                    <p><strong>Max Guests:</strong> {unit.maxGuests}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      <button
      className={`scroll-to-top ${showScrollButton ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      >
      <i className="fa-solid fa-chevron-up"></i>
      </button>

      </div>
  );
};

export default Query;
