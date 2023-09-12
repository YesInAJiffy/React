// src/components/Home.js
import React from "react";
import { useSelector } from "react-redux";
import  { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  // Define a state variable to store the form data
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: 0,
  });

  // Define a state variable to store the response from the API
  const [response, setResponse] = useState(null);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the POST request to the API
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', formData);

      // Set the response data in the state
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>POST API Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" style={{ display: 'inline-block', width: '60px' }}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="body" style={{ display: 'inline-block', width: '60px' }} >Body   :</label>
          <input
            type="text"
            id="body"
            name="body"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="userId" style={{ display: 'inline-block', width: '60px' }}>UserID:</label>
          <input
            type="number"
            id="userId"
            name="userId"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {response && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Blog;



