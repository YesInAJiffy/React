// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

function Contact() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      ); // Replace with your API endpoint
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Data List (from AXIOS):</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <>
              <b> Details for {item.id}</b>
              <li key={index}> UserID: {item.userId}</li>
              <li key={index}> Title: {item.title}</li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Contact;
