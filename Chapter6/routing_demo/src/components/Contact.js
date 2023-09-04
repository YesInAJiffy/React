// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


function Contact() {
  return <div><h1> Contact Page </h1>
  <Link to="/user/123">Go to User Profile</Link>

  </div>;
}

export default Contact;
