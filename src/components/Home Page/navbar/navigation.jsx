import React from "react";
import { Link } from "react-router-dom";
import PopupContainer from "./Authentication/PopupContainer";
import "./nav.css";

export default function Campsitenav() {
  return (
      <div className="mainnavcss">
        <nav>
          <div id="image"/>
          <ul>
            <li>
              <Link to="/" id="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" id="link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" id="link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/my-bookings" id="link">
                My Bookings
              </Link>
            </li>
            <div className="popupcontainer">
              <PopupContainer />
            </div>
          </ul>
        </nav>
      </div>
  );
}
