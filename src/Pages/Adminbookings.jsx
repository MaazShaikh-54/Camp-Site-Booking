import React from "react";
import Campsitenav from "../components/Home Page/navbar/navigation";
import Footer from "../components/Home Page/Footer/footer";
import "./CSS/adminbookings.css";

export default function Adminbookings() {
  return (
    <div>
      <Campsitenav />
      <br />
      <div id='bookings'>
        <h1>Bookings:</h1>
        <table>
          <tr>
            <th>Booking ID</th>
            <th>Customer Name</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Number of People</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>2021-12-01</td>
            <td>2021-12-05</td>
            <td>4</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>2021-12-10</td>
            <td>2021-12-15</td>
            <td>2</td>
            <td>500</td>
          </tr>
          <tr>
            <td>3</td>
            <td>John Smith</td>
            <td>2021-12-20</td>
            <td>2021-12-25</td>
            <td>6</td>
            <td>1500</td>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
}
