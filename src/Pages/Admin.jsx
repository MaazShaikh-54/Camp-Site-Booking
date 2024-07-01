import React from "react";
import Campsitenav from "../components/Home Page/navbar/navigation";
import Footer from "../components/Home Page/Footer/footer";
import { Link } from "react-router-dom";
import "./CSS/admin.css";

const Admin = () => {
  return (
    <div>
      <Campsitenav /><br /><br /><br />
      <div id="containeradmindash">
        <div className="container-row">
          <div id="d">
            <h2>Bookings</h2>
            {/* Add backend here */}
            <button><Link to='/adminbookings'>37 bookings</Link></button>
          </div>
          <div id="d">
            <h2>Product Details</h2>
            {/* Add backend here */}
            <button><Link to='/Adddetails'>Add Details</Link></button>
          </div>
        </div>

        <div className="container-row">
          <div id="d">
            <h2>Traffic</h2>
            {/* Add backend here */}
            
          </div>
          <div id="d">
            <h2>Packages</h2>
            {/* Add backend here */}
            <button><Link to='/Addpackages'>Add Packages</Link></button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
