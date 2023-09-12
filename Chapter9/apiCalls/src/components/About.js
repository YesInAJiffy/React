// src/components/Home.js
import React from "react";
import { useState, useEffect } from "react";

function About() {
  // Initialize state to hold the fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Create an async function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      ); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // Use the useEffect hook to trigger the data fetching when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        // Render a loading indicator while fetching data
        <p>Loading...</p>
      ) : error ? (
        // Render an error message if there was an error
        <p>Error: {error.message}</p>
      ) : (
        // Render the fetched data
        <div>
          <h1>Data List (Using Fetch):</h1>
          <ul>
            {data.map((item, index) => (
              <>
                <b> Details for {item.id}</b>
                <li key={index}> UserID: {item.userId}</li>
                <li key={index}> Title: {item.title}</li>
              </>
            ))}
          </ul>

          {/* When a specific todo item is selected
          <p>User ID : {data.userId}</p>
          <p>Title : {data.title}</p> */}
        </div>
      )}
    </div>
  );
}

export default About;
