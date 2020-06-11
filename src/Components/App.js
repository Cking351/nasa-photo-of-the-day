import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Header';
import Container from './Container';

// Importing API link and key
import { BASE_URL, API_KEY } from '../secrets';
import Axios from "axios";

function App() {
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();
  const [date, setDate] = useState();
  const [copyright, setCopyright] = useState()

  useEffect(() => {
    Axios.get(`http:${BASE_URL}?${API_KEY}`)
    .then(response => {
      const dailyImg = response.data.url
      setPhoto(dailyImg)
      const dailyTitle = response.data.title
      setTitle(dailyTitle)
      const dailyDate = response.data.date
      setDate(dailyDate)
      const dailyInfo = response.data.explanation
      setInfo(dailyInfo)
      const dailyCopy = response.data.copyright
      setCopyright(dailyCopy)
    })
  })

  return (
    <div className="App">
      <Header />
      <img src={photo} />
      <h3>{title}</h3>
      <div className='paraContainer' id='myTarget'>
      <p className='paraText'>{info}</p>
      <br></br>
      <p>Image Credit and Copyright: {copyright}</p>
      <h3>{date}</h3>
      </div>
    </div>
  );
}

export default App;
