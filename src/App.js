import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import HomePage from "./Components/Homepage";
import AboutUs from "./Components/Aboutus";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Query from "./Components/Query";
import UnitDetail from "./Components/Unitdetails";
import BookingPayment from "./Components/Bookingpayment";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Query" element={<Query />} />
        <Route path="/Unit/:id" element={<UnitDetail />} />
        <Route path="/Payment/:id" element={<BookingPayment />} />
      </Routes>
    </>
  );
}

export default App;
