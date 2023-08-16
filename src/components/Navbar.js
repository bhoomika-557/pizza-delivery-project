import React from "react";
import Pizzalogo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="leftsidenav">
        <img src={Pizzalogo} className="pizzalogo" />
      </div>
      <div className="rightsidenav">
        <Link to="/" className="navlinks">
          Home
        </Link>
        <Link to="/menu" className="navlinks">
          Menu
        </Link>
        <Link to="/about" className="navlinks">
          About
        </Link>
        <Link to="/contact" className="navlinks">
          Contact
        </Link>
        <Link className="cart">
          <ShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
}
