import React from "react";
import {Link} from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <div id="footpadding">
          <h2>Company</h2>
          <Link to="about-us">
            About Us
          </Link><br />
          <Link to="contact-us">
            Contact Us
          </Link>
            <h3>E-mail us your query:</h3>
            <a href="mailto:mohammd.maaz.shaikh54@gmail.com">
            <img src="https://i.pinimg.com/originals/56/dd/1a/56dd1a05af2ce0d493f1eb1ce98ba9d0.png" alt="E-mail us" style={{width: 60, borderRadius: 50, objectFit: 'cover'}} />
          </a>
        </div>
        <div id="loccamp">
          <h2>Camp Site Locations:</h2>
          <li>Ladakh</li>
          <li>Kashmir</li>
          <li>Rajasthan</li>
          <li>Maharashtra</li>
          <li>Sikkim</li>
        </div>
        <div style={{padding: 30}}>
          @ All rights reserved 2024. <br />
        </div>
      </footer>
    </div>
  );
}
