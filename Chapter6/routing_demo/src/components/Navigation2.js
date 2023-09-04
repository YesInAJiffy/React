import React from "react";
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import "./nav.css";


function Navigation2() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">

        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation2;
