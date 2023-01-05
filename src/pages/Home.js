import React from "react";
import mainImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${mainImage})` }}>
      <div className="headerContainer">
        <h1>Carver's Pizza</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default home;
