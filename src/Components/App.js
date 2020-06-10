import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Header';
import Container from './Container';

// Importing API link and key
import { BASE_URL, API_KEY } from '../secrets';
import Axios from "axios";

function App() {
  const[photo,setPhoto] = useState();
  const[title,setTitle] = useState();
  const[info,setInfo] = useState();
  const[date,setDate] = useState();

  useEffect(() => {
    Axios.get(`http:${BASE_URL}?${API_KEY}`)
    .then(response => {
      const dailyImg = response.data.url
      setPhoto(dailyImg)
      const dailyTitle = response.data.title
      setTitle(dailyTitle)
    })
  })

  return (
    <div className="App">
      <Header />
      <img src={photo} />
      <h2>{title}</h2>
    </div>
  );
}

export default App;
