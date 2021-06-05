/* eslint-disable */

import React from 'react';
import MapAPI from '../components/MapAPI';
import '../styles/Location.css';
import PizzaLeft from '../assets/pizzaLeft.jpg'
import { Link } from 'react-router-dom';

function Location() {
  return (
    <div className="location">
      <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}></div>
      <div className="rightSide">
        <div className="kakaomap">
          <h1>OUR LOCATION</h1>
          <MapAPI />
          <p className="kakaoAddress">Seoul, Republic of Korea</p>
          <Link to="/menu">
          <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Location
