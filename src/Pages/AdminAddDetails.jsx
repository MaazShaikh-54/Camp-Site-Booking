import React from "react";
import Campsitenav from "../components/Home Page/navbar/navigation";
import Footer from "../components/Home Page/Footer/footer";
import "./CSS/AdminAddDetails.css";

export default function AdminAddDetails() {
  return (
    <div>
      <Campsitenav />
      <br />
      <div id="adddetails">
        <h1>Add Details</h1>
        <form>
          <label for="campsiteName">Campsite Name:</label>
          <br />
          <input type="text" id="campsiteName" name="campsiteName" required />
          <br />
          <label for="location">Location:</label>
          <br />
          <input type="text" id="location" name="location" required />
          <br />
          <label for="price">Price:</label>
          <br />
          <input type="number" id="price" name="price" required />
          <br />
          <label for="description">Description:</label>
          <br />
          <textarea id="description" name="description" required></textarea>
          <br />
          <label for="image">Image:</label>
          <br />
          <input type="link" name="image" required />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
