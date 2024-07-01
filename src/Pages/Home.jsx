import React from "react";
import Campsitenav from "../components/Home Page/navbar/navigation";
import Search from "../components/Home Page/search";
import CampsiteList from "../components/Home Page/Card/card";
import Footer from "../components/Home Page/Footer/footer";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <Campsitenav/>
            <button><Link to="/admin">Admin Page</Link></button>
            <Search/>
            <CampsiteList/>
            <Footer/>
        </div>
    );
}