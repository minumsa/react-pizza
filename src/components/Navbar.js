import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {

const [openLinks, setOpenLinks] = useState(false);
const toggleNavbar = ()=>{
  setOpenLinks(!openLinks);
};

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to ="/">Home</Link>
          <Link to ="/menu">Menu</Link>
          <Link to ="/about">About</Link>
          <Link to ="/location">Location</Link>
        </div>
      </div>
        <div className="rightSide">
          <Link to ="/">Home</Link>
          <Link to ="/menu">Menu</Link>
          <Link to ="/about">About</Link>
          <Link to ="/location">Location</Link>
          <button onClick={ toggleNavbar }>
            <ReorderIcon />
          </button>
      </div>
    </div>
  )
}

export default Navbar
