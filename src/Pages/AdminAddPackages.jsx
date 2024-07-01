import React from "react";
import Campsitenav from "../components/Home Page/navbar/navigation";
import Footer from "../components/Home Page/Footer/footer";
import './CSS/adminaddpackages.css';

export default function AdminAddPackages() {
  return (
    <div>
      <Campsitenav />
      <br />
      <div id="packages">
        <h1>Add Packages</h1>
        <table>
          <tr>
            <th>Package ID</th>
            <th>Package Name</th>
            <th>Package Price</th>
            <th>Package Description</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Family Package</td>
            <td>2000</td>
            <td>Includes 2 adults and 2 children</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Couple Package</td>
            <td>1500</td>
            <td>Includes 2 adults</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Group Package</td>
            <td>3000</td>
            <td>Includes 5 adults</td>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
}
