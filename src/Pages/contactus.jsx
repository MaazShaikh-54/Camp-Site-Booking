import React from "react";
import Campsitenav from "../components/Home Page/navbar/navigation";
import Footer from "../components/Home Page/Footer/footer";
import "./CSS/contactus.css";
import FAQ from "../components/FAQ"

export default function Contactus() {
  return (
    <div>
      <Campsitenav />
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="contactcontainer">
          <a href="https://www.instagram.com/">
            <img src="https://p7.hiclipart.com/preview/729/192/1024/computer-icons-instagram-logo-sticker-logo.jpg" alt="Instagram" />
          </a>
          <a href="tel:+919867896756">
            <img src="https://i.pinimg.com/originals/14/28/e7/1428e7756c2f08bc105c7741a1f16e52.png" alt="Call us" />
          </a>
          <a href="mailto:musabvivoy83@gmail.com">
            <img src="https://i.pinimg.com/originals/56/dd/1a/56dd1a05af2ce0d493f1eb1ce98ba9d0.png" alt="E-mail us" />
          </a>
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
