import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Header';

// Importing API link and key
import { BASE_URL, API_KEY } from '../secrets';
import Axios from "axios";

function App() {
  Axios.get(`http:${BASE_URL}?${API_KEY}`)
    .then(response => {
      console.log(response.data)
    })

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
