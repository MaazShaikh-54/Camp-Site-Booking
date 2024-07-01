//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Pages/aboutus";
import Contactus from "./Pages/contactus";
import MyBookings from "./Pages/MyBookings";
import CampsiteDetailList from "./Pages/CampDetails";
import PaymentPage from "./Pages/payment";
import Admin from "./Pages/Admin";
import Adminbookings from "./Pages/Adminbookings";
import AdminAddDetails from "./Pages/AdminAddDetails";
import AdminAddPackages from "./Pages/AdminAddPackages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus/>} />
          <Route path="/contact-us" element={<Contactus/>} />
          <Route path="/my-bookings" element={<MyBookings/>} />
          <Route path="/campsite-detail" element={<CampsiteDetailList/>} />
          <Route path="/payment" element={<PaymentPage/>} />
          <Route path="/admin" element={<Admin/>} />  
          <Route path="/adminbookings" element={<Adminbookings/>} />  
          <Route path="/Adddetails" element={<AdminAddDetails/>} />  
          <Route path="/Addpackages" element={<AdminAddPackages/>} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
