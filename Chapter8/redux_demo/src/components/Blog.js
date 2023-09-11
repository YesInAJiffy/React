// src/components/Home.js
import React from "react";
import { useSelector } from "react-redux";

function Blog() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1> Blog Page </h1>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default Blog;
