import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Navigation from "./components/Navigation"
import Navigation2 from "./components/Navigation2"
import UserProfile from "./components/UserProfile";
import CounterComp from "./components/CounterComponent"


function App() {
  return (
      <Router>
        <Navigation2></Navigation2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/counter" element={<CounterComp />} />


          <Route path="/user/:id" element={<UserProfile />} > </Route>

        </Routes>
      </Router>
  );
}

export default App;


