import React from "react";
import Campsitenav from "../components/Home Page/navbar/navigation";
import Footer from "../components/Home Page/Footer/footer";
import "./CSS/aboutus.css";

export default function Aboutus() {
  return (
    <div>
      <Campsitenav />
      <br />
      <br />
      <div>
        <div id="bgcolabout">
          <p id="aboutourwebsite">
            Welcome to our campsite booking website, your gateway to adventure
            in India's diverse landscapes. <br />
            Spanning across several states, we offer the best service for
            camping enthusiasts. <br />
            Immerse yourself in nature's beauty, from the majestic mountains to
            the serene beaches. Start your journey with us and experience the
            thrill of outdoor living.
          </p>
          <div id="aboutusbgimg">
            <img
              src="https://storage.googleapis.com/pai-images/b98e0c6f337a4806821f842dc7d9e190.jpeg" alt="Camp Site About Us"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
      <div className="ppatou">
        <div>
          <h2>Privacy and policy</h2>
          <h3>Introduction</h3>
          <p>
            Welcome to our Camp Booking Site. This Privacy Policy describes how
            we collect, use, and disclose information when you visit or use our
            website.
          </p>
          <h3>Information We Collect</h3>
          <p>
            •Personal Information: When you book a campsite with us, we may
            collect personal information such as your name, email address, phone
            number, and payment information.
            <br />
            •Usage Data: We may also collect information about how you interact
            with our website, such as your IP address, browser type, and
            operating system. <br />
            •Cookies: We use cookies to enhance your experience on our website.
            You can set your browser to refuse all or some browser cookies, or
            to alert you when websites set or access cookies.
          </p>
          <h3>How We Use Your Information</h3>
          <p>
            We use the information we collect to:
            <br />
            <br />
            •Process your bookings and payments
            <br />
            •Communicate with you about your bookings and provide customer
            support
            <br />
            •Improve our website and services
            <br />
            •Comply with legal obligations
          </p>
          <h3>Sharing Your Information</h3>
          <p>
            We may share your information with:
            <br />
            <br />
            •Service providers who assist us with payment processing, data
            analysis, and other services
            <br />
            •Law enforcement or government agencies in response to a legal
            request
          </p>
          <h3>Security</h3>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access or disclosure.
          </p>
          <h3>Your Rights</h3>
          <p>
            You have the right to:
            <br />
            <br />
            •Access, correct, or delete your personal information
            <br />
            •Object to the processing of your personal information
            <br />
            •Lodge a complaint with a supervisory authority
          </p>
          <h3>Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at campsite658@gmail.com.
          </p>
          <h2>Terms of Use</h2>
          <h3>Agreement to Terms</h3>
          <p>
            By accessing or using our website, you agree to be bound by these
            Terms of Use.
          </p>
          <h3>Use of Our Website</h3>
          <p>
            You may use our website for lawful purposes only. You may not use
            our website:
            <br />
            <br />
            •In any way that violates any applicable law or regulation
            <br />
            •To engage in any conduct that restricts or inhibits anyone's use or
            enjoyment of the website
          </p>
          <h3>Intellectual Property Rights</h3>
          <p>
            The content on our website, including text, images, logos, and
            videos, is owned by us or our licensors and is protected by
            copyright and other intellectual property laws.
          </p>
          <h3>Limitation of Liability</h3>
          <p>
            We will not be liable for any loss or damage arising from your use
            of our website or reliance on any information provided on our
            website.
          </p>
          <h3>Changes to These Terms</h3>
          <p>
            We may update these Terms of Use from time to time. We will notify
            you of any changes by posting the new Terms of Use on this page.
          </p>
          <h3>Contact Us</h3>
          <p>
            If you have any questions about these Terms of Use, please contact
            us at musabvivoy83@gmail.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
