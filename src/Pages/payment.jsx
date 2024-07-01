import React, { useState } from "react";
import Footer from "../components/Home Page/Footer/footer";
import Campsitenav from "../components/Home Page/navbar/navigation";
import "./CSS/payment.css";

const PaymentPage = ({ campsitePrice }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    // Validate payment details
    if (!cardNumber || !expiry || !cvv) {
      setPaymentMessage("Please fill in all payment details.");
      return;
    }

    // Validate card details (this is a simple example, actual validation should be more robust)
    if (!/^\d{16}$/.test(cardNumber)) {
      setPaymentMessage("Invalid card number. Please enter a 16-digit card number.");
      return;
    }
    if (!/^\d{4}$/.test(cvv)) {
      setPaymentMessage("Invalid CVV. Please enter a 4-digit CVV.");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setPaymentMessage("Invalid expiry date. Please enter a valid expiry date (MM/YY).");
      return;
    }
  };

  return (
    <div>
      <Campsitenav /><br /><br /><br />
      <div className="payment-page">
        <h1>Payment</h1>
        <form onSubmit={handlePayment}>
          <h2>Total Amount: ₹{campsitePrice}</h2>
          {paymentMessage && <p className="payment-message">{paymentMessage}</p>}
          <div className="payment-form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="payment-form-group">
            <label htmlFor="expiry">Expiry Date:</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
          <div className="payment-form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="Enter CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            /> <br /><br />
            <button type="submit" className="payment-button">
            Pay Now
          </button><br /><br />
          </div>
          <div className="gpay-payment">
            <p>Pay with Google Pay</p>
            <h2 className="gpay-button">UPI: </h2>
          </div>
        </form>
      </div><br /><br /><br />
      <Footer />
    </div>
  );
};

export default PaymentPage;
