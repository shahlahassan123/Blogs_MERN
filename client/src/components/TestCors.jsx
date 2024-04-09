// Filename: TestCors.jsx

import axios from 'axios';
import React from 'react';

const TestCors = () => {
  const testCorsEndpoint = () => {
    const BASE_URL = 'https://blogs-mern-8ycn.onrender.com/api/test'; // Adjust accordingly

    axios.get(BASE_URL, { withCredentials: true })
      .then(response => {
        console.log('Response from /api/test:', response.data);
        alert(`CORS Test Successful: ${response.data.message}`);
      })
      .catch(error => {
        console.error('Error calling /api/test:', error);
        alert('CORS Test Failed. Check the console for errors.');
      });
  };

  return <button onClick={testCorsEndpoint}>Test CORS</button>;
};

export default TestCors;
