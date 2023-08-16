import React from "react";
import BannerImage from "../assets/pizza.jpeg"
import { Link } from "react-router-dom";
import "../styles/home.css"

export default function Home() {
  return (
   
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1 className="honeclass" > Pedro's Pizzeria </h1>
          <p className="para" > PIZZA TO FIT ANY TASTE</p>
          <Link to="/menu">
            <button className="buttonclass" > ORDER NOW </button>
          </Link>
        </div>
      </div>
    
  );
}
